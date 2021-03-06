import { ChangeEvent, ChangeEventHandler, useState } from "react";
import CauseCard from "components/CauseCard";
import { useTranslation } from "hooks/useTranslation";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import db from "firestore";

export const CauseList = <T extends { [key: string]: Cause[] }>({
  causes,
  type,
  reactions,
}: {
  causes: T;
  type: "give" | "seek";
  reactions: number[];
}) => {
  const t = useTranslation();

  type Category = keyof typeof causes;
  const categories = Object.keys(causes) as Category[];
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const handleChecboxChange = (event: ChangeEvent) => {
    const { name } = event.target as HTMLInputElement;
    if (selectedCategories.includes(name)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== name));
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const documentRef = doc(
    db,
    "reactions",
    type === "give" ? "giveCauses" : "seekCauses"
  );
  const [value, loading] = useDocumentData(documentRef);

  // Handmade prefetching
  const reactionValues = loading ? reactions : value;

  let categoryCauses: Cause[] = [];
  const shownCategories = selectedCategories.length
    ? selectedCategories
    : categories;
  shownCategories.forEach((category) => {
    categoryCauses.push(...causes[category]);
  });

  categoryCauses.sort((a, b) => {
    const aReaction = reactionValues?.[a.nameId] ?? 0;
    const bReaction = reactionValues?.[b.nameId] ?? 0;

    if (aReaction < bReaction) return 1;
    else if (aReaction > bReaction) return -1;
    else return 0;
  });

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="flex justify-evenly sticky top-0 bg-primary-dark py-4 z-10">
        {categories.map((category) => {
          const categoryAsString = category as string;
          const checked = selectedCategories.includes(categoryAsString);
          return (
            <label
              key={categoryAsString}
              className={`px-3 py-2 rounded-full cursor-pointer border-2 border-white-400 ${
                !checked && "opacity-60"
              }`}
            >
              <input
                type="checkbox"
                hidden
                key={categoryAsString}
                name={categoryAsString}
                checked={checked}
                onChange={handleChecboxChange}
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
          reactionsAmount={reactionValues?.[cause.nameId]}
          documentRef={documentRef}
        />
      ))}
    </div>
  );
};

export default CauseList;
