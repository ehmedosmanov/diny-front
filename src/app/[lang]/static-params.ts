import { VALID_LANGUAGES } from '../../middleware';

export async function generateStaticParams() {
  return VALID_LANGUAGES.map((lang) => ({
    lang: lang,
  }));
}