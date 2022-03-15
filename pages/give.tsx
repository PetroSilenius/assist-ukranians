import Head from "next/head";
import { useTranslation } from "hooks/useTranslation";
import giveCauses from "data/give_causes.json";
import CauseList from "components/CauseList";
import { doc, getDoc } from "firebase/firestore";
import db from "firestore";
import HeaderLogo from "components/HeaderLogo";

const Give = ({ reactions }: { reactions: number[] }) => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.give_help} - ${t.main_heading}`}</title>
      </Head>

      <main className="flex flex-1 items-center py-16 flex-col">
        <HeaderLogo />
        <h1 className="mt-6 text-4xl text-center">{t.give_help}</h1>
        <p className="mt-2 mb-12 text-center">{t.give_description}</p>

        <CauseList causes={giveCauses} type="give" reactions={reactions} />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const docRef = doc(db, "reactions", "giveCauses");
  const docSnap = await getDoc(docRef);
  const data = docSnap.exists() ? docSnap.data() : {};
  return {
    props: {
      reactions: data,
    },
  };
};

export default Give;
