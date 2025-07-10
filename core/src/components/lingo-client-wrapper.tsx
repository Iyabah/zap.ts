"use client";

import { LocaleSwitcher } from "lingo.dev/react/client";

export default function LingoClientWrapper() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <LocaleSwitcher
        locales={["en", "fr", "es", "zh", "ja", "de", "ru", "ar", "ko", "tr"]}
        className="locale-switcher-custom"
      />
    </div>
  );
}
