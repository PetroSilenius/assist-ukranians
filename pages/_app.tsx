import "globals.css";
import type { AppProps } from "next/app";
import { TranslationContext } from "TranslationContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  const translation = require(`../lang/${router.locale}.json`);

  return (
    <TranslationContext.Provider value={{ translation: translation }}>
      <Component {...pageProps} />
    </TranslationContext.Provider>
  );
}

export default MyApp;
