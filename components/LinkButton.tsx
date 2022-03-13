import { forwardRef } from "react";

interface LinkButtonProps {
  href?: string;
  text: string;
  dense?: boolean;
  props?: any;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href, text, dense = true, props }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        className={`w-60 my-4 py-2 px-4 text-center text-primary-dark rounded-full bg-sky-300 ${
          dense ? "text-lg font-bold" : ""
        }`}
        {...props}
      >
        {text}
      </a>
    );
  }
);
LinkButton.displayName = "LinkButton";

export default LinkButton;
