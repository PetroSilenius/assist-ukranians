import { useTranslation } from "hooks/useTranslation";

export const CauseCard = ({
  cause,
  type,
}: {
  cause: Cause;
  type: "help" | "seek";
}) => {
  const t = useTranslation();

  const { descriptionId, nameId, link } = cause;

  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-lg px-4 py-6 my-4">
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
  );
};

export default CauseCard;
