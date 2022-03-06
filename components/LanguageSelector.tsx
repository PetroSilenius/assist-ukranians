import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useTranslation } from "hooks/useTranslation";

export const LanguageSelector = () => {
  const t = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: currentLocale } = router;

  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useOnClickOutside(ref, () => setMenuOpen(false));

  useEffect(() => {
    if (router.locale && menuOpen) {
      setMenuOpen(false);
    }
  }, [router]);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-controls="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {t.change_language}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          id="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {locales?.map((locale) => (
            <li key={locale} role="none">
              <a
                className={`text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 active:bg-gray-100 active:text-gray-900 ${
                  locale === currentLocale ? "bg-gray-100" : " cursor-pointer"
                }`}
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${locale}`}
                onClick={() =>
                  router.push({ pathname, query }, asPath, {
                    locale: locale,
                  })
                }
              >
                {t[locale]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
