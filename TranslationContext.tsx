import { createContext, useContext } from "react";

export const TranslationContext = createContext<{ translation: Translation }>({
  translation: {},
});

export const useTranslation = () => {
  const { translation } = useContext(TranslationContext);
  return translation;
};
