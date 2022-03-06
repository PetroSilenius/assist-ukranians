import { useContext } from "react";
import { TranslationContext } from "pages/_app";

export const useTranslation = () => {
  const { translation } = useContext(TranslationContext);
  return translation;
};
