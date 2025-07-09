// Follow official lingo.dev Next.js integration exactly as documented
import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";

interface LingoServerProviderProps {
  children: React.ReactNode;
}

export default function LingoServerProvider({
  children,
}: LingoServerProviderProps) {
  return (
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale)}>
      {children}
    </LingoProvider>
  );
}
