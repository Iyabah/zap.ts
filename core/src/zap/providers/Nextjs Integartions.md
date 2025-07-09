# Next.js Integration

**Lingo.dev Compiler** integrates seamlessly with Next.js App Router to provide build-time localization without modifying your React components.

Follow these steps to add multilingual support to your Next.js application.

Or explore the [Next.js demo project](https://github.com/lingodotdev/lingo.dev/tree/main/demo/next-app) to try the Compiler in action.

## Prerequisites

- **Next.js 13+** with App Router
- **React 18+**
- Node.js 18 or higher
- Disabled turbopack for `dev` command

## Step 1. Install Package

Install the **lingo.dev** package:

```bash
npm install lingo.dev
```

## Step 2. Configure Next.js

Import and configure the compiler in your `next.config.js`:

```js
import lingoCompiler from "lingo.dev/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de"],
  models: {
    "*:*": "groq:mistral-saba-24b",
  },
})(nextConfig);
```

## Step 3. Set Up Authentication

**Lingo.dev Compiler** sends your content to AI translation engines for localization, so you need to authenticate first.

### Option 1. Lingo.dev Engine

Lingo.dev Compiler can use **Lingo.dev Engine** as your AI translation engine. It provides dynamic model selection, auto-routing, translation memory, and glossary support. Free and paid options are available.

To authenticate, run:

```bash
npx lingo.dev@latest login
```

If you have issues with the browser flow, you can manually add a `LINGODOTDEV_API_KEY` to your `.env.local`:

```bash
# .env.local
LINGODOTDEV_API_KEY=...
```

You will find the token in your Lingo.dev Engine Project Settings.

### Option 2. Alternative LLM Provider

Alternatively, you can use models from supported LLM providers:

- [GROQ](https://groq.com/)
- [Google AI](https://aistudio.google.com/)
- [OpenRouter](https://openrouter.ai/)
- [Ollama](https://ollama.com/)
- [Mistral](https://mistral.ai)

Add your API key(s) to your `.env.local`:

```bash
# .env.local
GROQ_API_KEY=gsk_...
GOOGLE_API_KEY=...
OPENROUTER_API_KEY=...
MISTRAL_API_KEY=...
```

**Note:** Make sure to activate your account with LLM provider and accept their Terms of service before using it in Compiler.

## Step 4. Add Provider

Import the provider in your root layout (`app/layout.tsx`):

```tsx
import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale)}>
      <html>
        <body>{children}</body>
      </html>
    </LingoProvider>
  );
}
```

## Step 5. Optional: Add Locale Switcher

Create a language switcher component:

```tsx
import { LocaleSwitcher } from "lingo.dev/react/client";

export function Header() {
  return (
    <header>
      <nav>
        <LocaleSwitcher locales={["en", "es", "fr", "de"]} />
      </nav>
    </header>
  );
}
```

## Step 6. Build and Test

Start your development server:

```bash
npm run dev
```

The compiler will automatically:

1. Scan your React components for translatable content
2. Extract translation keys
3. Generate AI-powered translations
4. Create optimized translation files in the `lingo/` directory

Visit `http://localhost:3000` to see your multilingual app in action.

## Configuration Options

You can customize the compiler behavior:

```js
export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de", "ja"],
  sourceRoot: "app", // Default for Next.js
  lingoDir: "lingo", // Translation files directory
  rsc: true, // Enable React Server Components support
  debug: false, // Enable debug logging
})(nextConfig);
```

## Server and Client Components

**Lingo.dev Compiler** works with both Server and Client Components:

### Server Components

Server Components are processed at build time with full translation support:

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to our app</h1>
      <p>This content is automatically translated</p>
    </div>
  );
}
```

### Client Components

Client Components receive optimized translation bundles:

```tsx
"use client";

import { useState } from "react";

export function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Production Deployment

1. **Build your application**:

   ```bash
   npm run build
   ```

2. **Commit translation files**:

   ```bash
   git add lingo/
   git commit -m "Add translations"
   ```

3. **Deploy** using your preferred platform (Vercel, Netlify, etc.)

Your Next.js app will serve localized content automatically based on user preferences or URL patterns.

## Next Steps

- **Advanced Configuration**: [Customization options](../configuration/advanced)
- **FAQ**: [Common questions and troubleshooting](../guides/faq)
- **How it Works**: [Understanding the build process](../how-it-works)
