import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FooterLang from "./FooterLang";
import { SunBtn } from "./ui/Sun";

const Navbar = () => {
  const { t } = useTranslation("global");

  //bg-sticky
  const [color, setColor] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-4 font-Fancy text-black-100 dark:bg-zinc-950 dark:text-light lg:py-5 ${color ? "bg-white/75 shadow-dark backdrop-blur dark:bg-zinc-950/75 dark:shadow-lightWhite" : ""}`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <Link
            to="/"
            className="font-Fancy font-bold tracking-wide lg:text-lg"
          >
            Risat.
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className="rounded-2xl px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-black-500 hover:text-light dark:hover:bg-light dark:hover:text-black-500 md:text-sm [&.active]:bg-black-500 [&.active]:text-light dark:[&.active]:bg-light dark:[&.active]:text-black"
          >
            {t("nav.about")}
          </Link>
          <FooterLang />
          <SunBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
