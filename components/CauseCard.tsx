import { useTranslation } from "hooks/useTranslation";
import { useState } from "react";
import { updateDoc, DocumentReference } from "firebase/firestore";

export const CauseCard = ({
  cause,
  type,
  reactionsAmount,
  documentRef,
}: {
  cause: Cause;
  type: "help" | "seek";
  reactionsAmount: number;
  documentRef: DocumentReference;
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const t = useTranslation();

  const { descriptionId, nameId, link } = cause;

  const handleClick = () => {
    setButtonDisabled(true);
    updateDoc(documentRef, { [nameId]: reactionsAmount + 1 || 1 });
  };

  return (
    <div className="flex items-center">
      <div className="flex-1 flex justify-between items-center bg-slate-300 rounded-lg px-4 py-6 my-4">
        <div>
          <h1 className="text-2xl">{t[nameId]}</h1>
          <p>{t[descriptionId]}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-sky-500 p-3 rounded-lg ml-2"
        >
          {t[type]}
        </a>
      </div>
      <button
        disabled={buttonDisabled}
        onClick={handleClick}
        className="text-3xl contrast-75 ml-2 mr-1 w-10 h-10 rounded-full transition hover:bg-yellow-100 hover:scale-90 hover:contrast-100 active:bg-yellow-200 active:scale-125 disabled:contrast-125"
      >
        💡
      </button>
      <span>{reactionsAmount}</span>
    </div>
  );
};

export default CauseCard;
