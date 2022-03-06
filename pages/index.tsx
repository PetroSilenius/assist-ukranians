import type { GetStaticProps } from "next";
import Head from "next/head";
import Card from "components/Card";
import { useTranslation } from "hooks/useTranslation";

const Home = () => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{t.main_heading}</title>
      </Head>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t.main_heading}🇺🇦</h1>

        <p className="my-16 text-2xl">{t.main_description}</p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl">
          <Card href="/give" heading={t.give_help} />
          <Card href="/seek" heading={t.seek_help} />
        </div>
      </main>

      <footer className="flex py-8 justify-center items-center border-t border-slate-300">
        <a
          href="https://github.com/PetroSilenius/support-ukraine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center flex-grow text-slate-700"
        >
          Powered by the community
        </a>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};

export default Home;
