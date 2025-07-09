import { NextRequest } from "next/server";

/**
 * Lingo middleware for detecting and handling locales from requests
 * @param request The incoming Next.js request
 * @returns The detected locale or default locale if none is detected
 */
export const lingoMiddleware = (request: NextRequest) => {
  // Define our supported locales
  const defaultLocale = "en";
  const supportedLocales = [
    "en",
    "fr",
    "es",
    "zh",
    "ja",
    "de",
    "ru",
    "ar",
    "ko",
    "tr",
  ];

  // Get the locale from Accept-Language header
  const acceptLanguageHeader = request.headers.get("accept-language");

  if (acceptLanguageHeader) {
    // Parse the Accept-Language header (e.g., "en-US,en;q=0.9,es;q=0.8")
    const preferredLocales = acceptLanguageHeader
      .split(",")
      .map((item) => {
        const [locale, qValue] = item.trim().split(";q=");
        return {
          locale: locale.split("-")[0], // Extract primary language code
          quality: qValue ? parseFloat(qValue) : 1.0,
        };
      })
      .sort((a, b) => b.quality - a.quality); // Sort by quality value (highest first)

    // Find the first supported locale from the preferred locales
    for (const { locale } of preferredLocales) {
      if (supportedLocales.includes(locale)) {
        return locale;
      }
    }
  }

  // Check for locale in URL pathname
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split("/")[1];

  if (supportedLocales.includes(pathnameLocale)) {
    return pathnameLocale;
  }

  // Use default locale as fallback
  return defaultLocale;
};
