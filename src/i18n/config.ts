// ---------------------------------------------------------------------------
// i18n configuration — ready for next-intl or similar library
// ---------------------------------------------------------------------------

export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'es'] as const,
  localeDetection: true,
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
