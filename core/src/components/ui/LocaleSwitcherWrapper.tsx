"use client";

import { LocaleSwitcher } from "lingo.dev/react/client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

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
    <Button variant={variant} size="icon">
      <Globe className="h-4 w-4" />
      <LocaleSwitcher
        locales={["en", "es", "zh", "ja", "fr", "de", "ru", "ar", "ko", "tr"]}
        className="sr-only"
      />
    </Button>
  );
}
