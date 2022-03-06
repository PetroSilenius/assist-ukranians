import "globals.css";
import type { AppProps } from "next/app";
import { createContext } from "react";
import LanguageSelector from "components/LanguageSelector";
import Link from "next/link";

export const TranslationContext = createContext<{ translation: Translation }>({
  translation: {},
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const translation = require(`../lang/${router.locale}.json`);

  return (
    <TranslationContext.Provider value={{ translation: translation }}>
      <div className="px-8">
        <header className="m-2 flex justify-between ">
          <div>
            {router.asPath !== "/" && (
              <Link href="/">
                <a>⬅</a>
              </Link>
            )}
          </div>
          <LanguageSelector />
        </header>
        <Component {...pageProps} />
      </div>
    </TranslationContext.Provider>
  );
}

export default MyApp;
