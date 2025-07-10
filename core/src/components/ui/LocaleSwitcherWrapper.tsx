"use client";

import { LocaleSwitcher } from "lingo.dev/react/client";

interface LocaleSwitcherProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export default function LocaleSwitcherWrapper({
  variant = "default",
}: LocaleSwitcherProps) {
  return (
    <div className="relative inline-block">
      <LocaleSwitcher
        locales={["en", "es", "zh", "ja", "fr", "de", "ru", "ar", "ko", "tr"]}
        className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 [&>span]:uppercase dark:hover:bg-accent/90"
      />
    </div>
  );
}
