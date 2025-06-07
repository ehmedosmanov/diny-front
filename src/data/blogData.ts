import BlogImg from '@/assets/images/blog-img.jpg';
import { StaticImageData } from 'next/image';

export type Blog = {
  id: number;
  title: string;
  image: StaticImageData;
  date: string;
  viewCount: number;
};

export const blogData: Blog[] = [
  {
    id: 1,
    title: 'The Best Restaurants in Town',
    image: BlogImg,
    date: '2023-10-01',
    viewCount: 120,
  },
  {
    id: 2,
    title: 'Top 10 Dishes You Must Try',
    image: BlogImg,
    date: '2023-09-15',
    viewCount: 200,
  },
  {
    id: 3,
    title: 'A Guide to Food Festivals',
    image: BlogImg,
    date: '2023-08-20',
    viewCount: 150,
  },
  {
    id: 4,
    title: 'Healthy Eating Tips',
    image: BlogImg,
    date: '2023-07-10',
    viewCount: 300,
  },
  {
    id: 5,
    title: 'Exploring Local Cuisines',
    image: BlogImg,
    date: '2023-06-05',
    viewCount: 250,
  },
  {
    id: 6,
    title: 'Cooking on a Budget',
    image: BlogImg,
    date: '2023-05-22',
    viewCount: 180,
  },
  {
    id: 7,
    title: 'Seasonal Ingredients Guide',
    image: BlogImg,
    date: '2023-05-01',
    viewCount: 130,
  },
  {
    id: 8,
    title: 'World Street Food Tour',
    image: BlogImg,
    date: '2023-04-15',
    viewCount: 220,
  },
  {
    id: 9,
    title: 'Vegan Recipes for Beginners',
    image: BlogImg,
    date: '2023-03-30',
    viewCount: 90,
  },
  {
    id: 10,
    title: 'The Art of Food Plating',
    image: BlogImg,
    date: '2023-03-10',
    viewCount: 160,
  },
  {
    id: 11,
    title: 'Wine Pairing Basics',
    image: BlogImg,
    date: '2023-02-20',
    viewCount: 140,
  },
  {
    id: 12,
    title: 'Desserts to Impress',
    image: BlogImg,
    date: '2023-02-05',
    viewCount: 210,
  },
];
