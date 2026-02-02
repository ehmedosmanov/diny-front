import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { VALID_LANGUAGES } from '../../middleware';
import { Poppins, Raleway } from 'next/font/google';
import 'mapbox-gl/dist/mapbox-gl.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Diny',
    template: '%s | Diny',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'az-AZ': '/az',
      'ru-RU': '/ru',
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = params ? await params : undefined;
  const paramLang = resolvedParams?.lang;
  const lang =
    paramLang && VALID_LANGUAGES.includes(paramLang) ? paramLang : 'en';

  return (
    <html lang={lang}>
      <body className={`${poppins.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
