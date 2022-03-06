const Card = ({
  href,
  heading,
  description,
}: {
  href: string;
  heading: string;
  description: string;
}) => {
  return (
    <a
      href={href}
      className="m-4 p-6 text-left border border-slate-300 rounded-xl max-w-xs transition-colors hover:text-sky-500 hover:border-sky-500 active:text-sky-500 active:border-sky-500 focus:text-sky-500 focus:border-sky-500"
    >
      <h2 className="mb-4 text-2xl">{heading} &rarr;</h2>
      <p className="m-0 text-xl">{description}</p>
    </a>
  );
};
export default Card;
