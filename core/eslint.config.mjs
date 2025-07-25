import { FlatCompat } from "@eslint/eslintrc";
import drizzlePlugin from "eslint-plugin-drizzle";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Temporarily disabled ESLint configuration
const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  // {
  //   plugins: {
  //     drizzle: drizzlePlugin,
  //     "simple-import-sort": simpleImportSort,
  //   },
  //   rules: {
  //     ...drizzlePlugin.configs.recommended.rules,
  //     "simple-import-sort/imports": "error",
  //     "simple-import-sort/exports": "error",
  //   },
  // },
];

export default eslintConfig;
