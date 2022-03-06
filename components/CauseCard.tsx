import { useTranslation } from "hooks/useTranslation";

export const CauseCard = ({
  description,
  name,
  href,
  type,
}: {
  description: string;
  name: string;
  href: string;
  type: "help" | "seek";
}) => {
  const t = useTranslation();

  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-lg px-4 py-6 my-4">
      <div>
        <h1 className="text-2xl">{t?.[name]}</h1>
        <p>{t?.[description]}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-sky-500 p-3 rounded-lg ml-2"
      >
        {t?.[type]}
      </a>
    </div>
  );
};

export default CauseCard;
