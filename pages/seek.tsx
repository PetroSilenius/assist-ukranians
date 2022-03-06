import type { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import seekCauses from "data/seek_causes.json";
import CauseList from "components/CauseList";

const Seek = () => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.seek_help} - ${t.main_heading}`}</title>
        <meta name="description" content={t.main_description} />
      </Head>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t.seek_help}🇺🇦</h1>
        <CauseList causes={seekCauses} type="seek" />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Seek;
