import Link from "next/link";

const Card = ({
  href,
  heading,
  description,
}: {
  href: string;
  heading: string;
  description?: string;
}) => {
  return (
    <Link href={href}>
      <a className="m-4 p-6 text-left border border-slate-300 rounded-xl max-w-xs transition-colors hover:text-sky-500 hover:border-sky-500 active:text-sky-500 active:border-sky-500 focus:text-sky-500 focus:border-sky-500">
        <h2 className="text-2xl">{heading} &rarr;</h2>
        {description && <p className="m-0 mt-4 text-xl">{description}</p>}
      </a>
    </Link>
  );
};
export default Card;
