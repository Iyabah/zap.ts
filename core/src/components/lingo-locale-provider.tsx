import { LingoProvider } from "lingo.dev/react/rsc";

export default function LingoLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <LingoProvider
      loadDictionary={async () => {
        const dict = (await import("@/lingo/dictionary")).default;
        return dict;
      }}
    >
      {children}
    </LingoProvider>
  );
}
