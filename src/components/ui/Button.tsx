import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <button
        className="fixed left-2 top-16 shadow-dark dark:shadow-lightWhite lg:left-4 lg:top-[4.5rem]"
        aria-label="return to dashbord"
      >
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md bg-black-500 px-4 py-2 text-[12px] font-medium text-light transition-colors duration-300 ease-in-out hover:bg-gray-700 dark:bg-light dark:text-black-500 dark:hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {t("dashboard.btn")}
        </Link>
      </button>
    </>
  );
};

export default Button;
