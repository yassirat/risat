import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";
import { LangContext } from "../context/language/lang-context";

const FooterLang = () => {
  const { hover, setHover, buttonRef, menuRef, handleClickOutside } =
    useContext(LangContext);

  const { t, i18n } = useTranslation("global");

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setHover(false);
  };

  const langBtns = [
    { id: 1, lang: "English", value: "en", img: english },
    { id: 2, lang: "Français", value: "fr", img: french },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        className="flex animate-fadeIn items-center rounded px-1 py-1 text-xs font-medium italic transition-all duration-300 ease-in-out"
        title={t("footer.lang")}
        ref={buttonRef}
        onClick={() => handleClickOutside()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-languages"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={`size-3 transition-transform duration-300 ease-in-out ${hover ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <AnimatePresence>
        {hover && (
          <motion.div
            ref={menuRef}
            className="absolute right-0 top-10 z-10 grid origin-top-right place-content-center gap-4 rounded-lg bg-neutral-300/85 p-4 text-black shadow-dark backdrop-blur dark:shadow-lightWhite"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {langBtns.map((btn) => (
              <button
                key={btn.id}
                className="flex w-24 items-center justify-center gap-1 text-nowrap rounded bg-neutral-100 px-2 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light dark:bg-neutral-300 dark:hover:bg-black-100 md:text-sm lg:gap-2"
                onClick={() => changeLang(btn.value)}
              >
                {btn.lang}
                <img
                  src={btn.img}
                  alt={btn.lang}
                  className="w-6 object-cover"
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterLang;
