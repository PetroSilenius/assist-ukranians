import { useState } from "react";
import CauseCard from "components/CauseCard";
import { useTranslation } from "hooks/useTranslation";

export const CauseList = <
  T extends { [key: string]: { [key: string]: string }[] }
>({
  causes,
  type,
}: {
  causes: T;
  type: "help" | "seek";
}) => {
  type Category = keyof typeof causes;

  const categories = Object.keys(causes) as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  const t = useTranslation();

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
              {t?.[categoryAsString]}
            </label>
          );
        })}
      </div>
      {causes?.[selectedCategory]?.map((cause) => (
        <CauseCard
          key={cause.name}
          href={cause.link}
          name={cause.name}
          description={cause.description}
          type={type}
        />
      ))}
    </div>
  );
};

export default CauseList;
