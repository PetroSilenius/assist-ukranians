import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import seekCauses from "data/seek_causes.json";
import CauseList from "components/CauseList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "db";

const Seek = ({ reactions }: { reactions: number[] }) => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.seek_help} - ${t.main_heading}`}</title>
      </Head>

      <main className="min-h-screen flex flex-1 justify-center items-center py-16 flex-col">
        <h1 className="m-0 text-6xl text-center">{t.seek_help}🇺🇦</h1>
        <CauseList causes={seekCauses} type="seek" reactions={reactions} />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const docRef = doc(db, "reactions", "seekCauses");
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

export default Seek;
