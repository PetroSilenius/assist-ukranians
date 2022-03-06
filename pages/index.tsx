import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "components/Card";
import LanguageSelector from "components/LanguageSelector";
import { useTranslation } from "hooks/useTranslation";

const Home = () => {
  const t = useTranslation();

  return (
    <div className="px-8">
      <Head>
        <title>{t?.main_heading}</title>
        <meta name="description" content={t?.main_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="m-2 flex flex-row-reverse">
        <LanguageSelector />
      </header>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t?.main_heading}🇺🇦</h1>

        <p className="my-16 text-2xl">{t?.main_description}</p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl">
          <Card
            href="https://nextjs.org/docs"
            heading="Documentation"
            description="Find in-depth information about Next.js features and API."
          />

          <Card
            href="https://nextjs.org/learn"
            heading="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <Card
            href="https://github.com/vercel/next.js/tree/canary/examples"
            heading="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            heading="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="flex py-8 justify-center items-center border-t border-slate-300">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center flex-grow"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};

export default Home;
