import "globals.css";
import type { AppProps } from "next/app";
import { createContext } from "react";
import LanguageSelector from "components/LanguageSelector";
import Link from "next/link";
import Head from "next/head";
import { LinkButton } from "components/LinkButton";

export const TranslationContext = createContext<{ translation: Translation }>({
  translation: {},
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const translation = require(`../lang/${router.locale}.json`);

  return (
    <TranslationContext.Provider value={{ translation: translation }}>
      <Head>
        <meta name="description" content={translation.main_description} />
      </Head>
      <div className="min-h-screen flex flex-col bg-primary-dark text-slate-100 px-8">
        <header className="p-2 flex justify-between">
          <div>
            {router.asPath !== "/" && (
              <Link href="/">
                <a className="text-3xl">&#8592;</a>
              </Link>
            )}
          </div>
          <div>
            {router.asPath !== "/" && (
              <LinkButton
                href="https://forms.gle/1Uy4vwChDVUeRpSx6"
                text={translation.suggest}
                dense={false}
                props={{ rel: "noopener noreferrer", target: "_blank" }}
              />
            )}
            <LanguageSelector />
          </div>
        </header>
        <Component {...pageProps} />
      </div>
    </TranslationContext.Provider>
  );
}

export default MyApp;
