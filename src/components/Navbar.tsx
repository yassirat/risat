import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import FooterLang from "./FooterLang";
import { SunBtn } from "./ui/Sun";

const Navbar = () => {
  const { t } = useTranslation("global");

  //bg-sticky
  // const [color, setColor] = useState(false);
  // const changeBg = () => {
  //   if (window.scrollY >= 10) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBg);

  return (
    <header className="fixed top-4 z-50 w-full px-4 font-Fancy text-black-100 dark:text-light">
      <nav className="mx-auto flex max-w-lg animate-fadeIn items-center justify-between rounded-full bg-white/85 px-4 py-2 shadow-dark backdrop-blur dark:bg-black/85 dark:shadow-lightWhite">
        <Link to="/" className="font-Fancy font-bold tracking-wide lg:text-lg">
          Risat.
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className="rounded-full px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-black-500 hover:text-light dark:hover:bg-light dark:hover:text-black-500 [&.active]:bg-black-500 [&.active]:text-light dark:[&.active]:bg-light dark:[&.active]:text-black"
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
