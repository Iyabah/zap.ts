"use client";

import { createContext, useContext } from "react";

// Create a simple locale context for now
const LocaleContext = createContext<{
  locale: string;
  setLocale: (locale: string) => void;
}>({
  locale: "en",
  setLocale: () => {},
});

// Simple translation function for now
const t = (key: string, params?: Record<string, any>) => {
  // This is a placeholder implementation
  // In a real app, you'd want to load translations from your dictionary
  return key;
};

// Hook to get current locale
const useLocale = () => {
  const context = useContext(LocaleContext);
  return context.locale;
};

// Hook to set locale
const useSetLocale = () => {
  const context = useContext(LocaleContext);
  return context.setLocale;
};

/**
 * A utility hook to access translations
 * @returns The translation functions and current locale
 */
export const useTranslation = () => {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return {
    t,
    locale,
    setLocale,
  };
};
