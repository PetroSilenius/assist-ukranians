import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import seekCauses from "data/seek_causes.json";
import CauseList from "components/CauseList";
import { doc, getDoc } from "firebase/firestore";
import db from "firestore";

const Seek = ({ reactions }: { reactions: number[] }) => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.seek_help} - ${t.main_heading}`}</title>
      </Head>

      <main className="flex flex-1 justify-center items-center py-16 flex-col">
        <p className="text-8xl">🇺🇦</p>
        <h1 className="m-0 text-5xl text-center">{t.seek_help}</h1>
        <p className="mt-4 mb-12 text-center">{t.seek_description}</p>
        <CauseList causes={seekCauses} type="seek" reactions={reactions} />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const docRef = doc(db, "reactions", "seekCauses");
  const docSnap = await getDoc(docRef);
  const data = docSnap.exists() ? docSnap.data() : {};
  return {
    props: {
      reactions: data,
    },
  };
};

export default Seek;
