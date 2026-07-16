import { Link } from "@tanstack/react-router";
import FooterLang from "./FooterLang";
import { SunBtn } from "./ui/Sun";

const Navbar = () => {
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
      <nav className="mx-auto flex max-w-lg animate-fadeIn items-center justify-between rounded-full bg-white/85 px-6 py-2 shadow-dark backdrop-blur dark:bg-black/85 dark:shadow-lightWhite">
        <Link to="/" className="font-Fancy font-bold tracking-wide">
          Risat.
        </Link>

        <div className="flex items-center gap-4">
          <FooterLang />
          <SunBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
