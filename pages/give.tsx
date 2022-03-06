import type { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import giveCauses from "data/give_causes.json";
import CauseList from "components/CauseList";

const Give = () => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.give_help} - ${t.main_heading}`}</title>
      </Head>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t.give_help}🇺🇦</h1>

        <CauseList causes={giveCauses} type="help" />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Give;
