import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import giveCauses from "data/give_causes.json";
import CauseList from "components/CauseList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "db";

const Give = ({ reactions }: { reactions: number[] }) => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.give_help} - ${t.main_heading}`}</title>
      </Head>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t.give_help}🇺🇦</h1>

        <CauseList causes={giveCauses} type="help" reactions={reactions} />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const docRef = doc(db, "reactions", "giveCauses");
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }
  const data = docSnap.data();
  return {
    props: {
      reactions: data,
    },
  };
};

export default Give;
