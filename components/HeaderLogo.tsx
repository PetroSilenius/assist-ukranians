import Image from "next/image";

export const HeaderLogo = ({ size = "96px" }: { size?: string }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Square Ukranian flag"
      height={size}
      width={size}
    />
  );
};

export default HeaderLogo;
