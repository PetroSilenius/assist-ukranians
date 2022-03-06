import "globals.css";
import type { AppProps } from "next/app";
import { createContext } from "react";

export const TranslationContext = createContext<{ translation: Translation }>({
  translation: {},
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const translation = require(`../lang/${router.locale}.json`);

  return (
    <TranslationContext.Provider value={{ translation: translation }}>
      <Component {...pageProps} />
    </TranslationContext.Provider>
  );
}

export default MyApp;
