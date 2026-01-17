'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  rating?: number;
}

interface MapboxMapProps {
  locations: Location[];
  center?: { lat: number; lng: number };
  zoom?: number;
  onMarkerClick?: (location: Location) => void;
  style?: string; // Mapbox style URL
}

export default function MapboxMap({
  locations,
  center = { lat: 41.3851, lng: 2.1734 }, // Barcelona coordinates
  zoom = 12,
  onMarkerClick,
  style = 'mapbox://styles/mapbox/dark-v11', // Dark theme by default
}: MapboxMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

    if (!mapboxgl.accessToken) {
      console.error('Mapbox access token is missing! Add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to .env.local');
      return;
    }

    if (!mapContainerRef.current) return;

    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: style,
      center: [center.lng, center.lat],
      zoom: zoom,
      attributionControl: false,
    });

    // Add navigation controls (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // Add attribution (required by Mapbox)
    map.addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      }),
      'bottom-left'
    );

    map.on('load', () => {
      setIsLoaded(true);
    });

    mapRef.current = map;

    // Cleanup on unmount
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center.lat, center.lng, zoom, style]);

  useEffect(() => {
    if (!mapRef.current || !isLoaded) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Create custom marker element with proper structure
    const createMarkerElement = () => {
      // Create wrapper to prevent Mapbox transform conflicts
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = '36px';
      wrapper.style.height = '36px';
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.justifyContent = 'center';
      
      // Create the actual marker circle
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#CD7F4E';
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
      el.style.cursor = 'pointer';
      el.style.transition = 'all 0.2s ease-in-out';
      el.style.position = 'relative';
      
      // Add hover effect to the inner circle
      wrapper.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.2)';
        el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
      });
      wrapper.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
      });

      wrapper.appendChild(el);
      return wrapper;
    };

    // Add markers for each location
    locations.forEach((location) => {
      const markerElement = createMarkerElement();

      // Create popup with action button for mobile
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        className: 'custom-popup',
        maxWidth: '250px',
      }).setHTML(`
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          padding: 12px;
        ">
          <strong style="font-size: 16px; color: #1a1a1a; display: block; margin-bottom: 6px;">
            ${location.name}
          </strong>
          ${
            location.rating
              ? `<div style="font-size: 13px; color: #666; margin-bottom: 12px;">
                   ${'⭐'.repeat(Math.floor(location.rating))} ${location.rating}
                 </div>`
              : ''
          }
          <button 
            id="view-details-${location.id}"
            style="
              width: 100%;
              background-color: #CD7F4E;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            onmouseover="this.style.backgroundColor='#B86F3E'"
            onmouseout="this.style.backgroundColor='#CD7F4E'"
          >
            View Details
          </button>
        </div>
      `);

      // Create marker
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(mapRef.current!);

      // Add event listener for the View Details button after popup opens
      popup.on('open', () => {
        const button = document.getElementById(`view-details-${location.id}`);
        if (button) {
          button.addEventListener('click', () => {
            if (onMarkerClick) {
              onMarkerClick(location);
            }
            popup.remove();
          });
        }
      });

      // Add click event to marker - just fly to location
      markerElement.addEventListener('click', () => {
        mapRef.current?.flyTo({
          center: [location.lng, location.lat],
          zoom: 15,
          duration: 800,
        });
      });

      markersRef.current.push(marker);
    });

    // Fit bounds to show all markers
    if (locations.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach((location) => {
        bounds.extend([location.lng, location.lat]);
      });
      mapRef.current?.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 15,
      });
    }
  }, [locations, isLoaded, onMarkerClick]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CD7F4E] mx-auto mb-4"></div>
            <p className="text-gray-300">Loading map...</p>
          </div>
        </div>
      )}
      {!mapboxgl.accessToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg p-4">
          <div className="text-center text-red-600">
            <p className="font-bold mb-2">Mapbox Access Token Missing!</p>
            <p className="text-sm">
              Add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to your .env.local file
            </p>
          </div>
        </div>
      )}
    </div>
  );
}