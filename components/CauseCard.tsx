import { useTranslation } from "hooks/useTranslation";
import { useState } from "react";
import { updateDoc, DocumentReference } from "firebase/firestore";

export const CauseCard = ({
  cause,
  reactionsAmount,
  documentRef,
}: {
  cause: Cause;
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
    <div className="flex items-center justify-between bg-slate-900 rounded-lg my-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-6 pl-4"
      >
        <h1 className="text-2xl">{t[nameId]}</h1>
        <p>{t[descriptionId]}</p>
      </a>
      <div className="text-center pr-4">
        <button
          disabled={buttonDisabled}
          onClick={handleClick}
          className="text-3xl w-10 h-10 contrast-50 rounded-full transition hover:bg-yellow-100/75 hover:scale-90 hover:contrast-100 active:bg-yellow-200 active:scale-125 active:contrast-100 disabled:contrast-125 disabled:hover:bg-transparent disabled:hover:scale-100"
        >
          💡
        </button>
        <p className="text-center">{reactionsAmount}</p>
      </div>
    </div>
  );
};

export default CauseCard;
