import { useState } from "react";
import CauseCard from "components/CauseCard";
import { useTranslation } from "hooks/useTranslation";
import { doc, onSnapshot } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import db from "firestore";

export const CauseList = <T extends { [key: string]: Cause[] }>({
  causes,
  type,
  reactions,
}: {
  causes: T;
  type: "help" | "seek";
  reactions: number[];
}) => {
  const t = useTranslation();

  type Category = keyof typeof causes;
  const categories = Object.keys(causes) as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  const documentRef = doc(
    db,
    "reactions",
    type === "help" ? "giveCauses" : "seekCauses"
  );
  const [value, loading] = useDocumentData(documentRef);

  // Handmade prefetching
  const reactionValues = loading ? reactions : value;

  const categoryCauses = causes[selectedCategory].sort(
    (a, b) => reactionValues?.[b.nameId] - reactionValues?.[a.nameId]
  );

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="flex">
        {categories.map((category) => {
          const categoryAsString = category as string;
          const checked = categoryAsString === selectedCategory;
          return (
            <label
              key={categoryAsString}
              className={`p-3 rounded-lg mr-2 cursor-pointer ${
                checked ? "bg-yellow-400" : "bg-yellow-300"
              }`}
            >
              <input
                type="radio"
                hidden
                key={categoryAsString}
                checked={checked}
                onChange={() => setSelectedCategory(categoryAsString)}
              />
              {t[categoryAsString]}
            </label>
          );
        })}
      </div>
      {categoryCauses.map((cause) => (
        <CauseCard
          key={cause.nameId}
          cause={cause}
          type={type}
          reactionsAmount={reactionValues?.[cause.nameId]}
          documentRef={documentRef}
        />
      ))}
    </div>
  );
};

export default CauseList;
