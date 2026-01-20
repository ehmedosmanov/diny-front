import type React from 'react';
import { notFound } from 'next/navigation';
import { TranslateProvider } from '@/context/TranlateContext';
import { VALID_LANGUAGES, type ValidLanguage } from '../../../middleware';

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!VALID_LANGUAGES.includes(lang as ValidLanguage)) {
    notFound();
  }

  return <TranslateProvider lang={lang as ValidLanguage}>{children}</TranslateProvider>;
}