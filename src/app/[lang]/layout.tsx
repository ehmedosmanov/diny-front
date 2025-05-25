import type React from 'react';
import { notFound } from 'next/navigation';
import { TranslateProvider } from '@/context/TranlateContext';
import { VALID_LANGUAGES } from '../../../middleware';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params;

  if (!VALID_LANGUAGES.includes(lang)) {
    notFound();
  }

  return <TranslateProvider lang={lang}>{children}</TranslateProvider>;
}
