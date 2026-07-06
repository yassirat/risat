import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Fàq } from "./Accordion/Fàq";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <div className="relative grid w-full place-content-center bg-light bg-dot-black/[0.3] dark:bg-zinc-950 dark:bg-dot-white/[0.25]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-zinc-950"></div>
        <section className="container z-20 mx-auto grid min-h-dvh animate-fadeIn place-content-center gap-6 px-8 lg:place-items-center">
          <div>
            <h1 className="bg-gradient-to-br from-neutral-700 to-neutral-500 bg-clip-text text-center font-Fancy text-4xl font-bold uppercase text-transparent dark:from-neutral-400 dark:to-neutral-600 lg:text-5xl xl:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="z-30 text-center font-Fancy font-medium text-neutral-700 dark:text-neutral-400 lg:text-lg">
              {t("hero.parag")}
            </p>
          </div>
          <Link
            to="/"
            className="rounded-md bg-indigo-700 px-6 py-2 text-center text-xs font-medium tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-indigo-600"
          >
            {t("hero.btn")}
          </Link>
        </section>

        {/* faq */}
        <section className="container z-10 mx-auto min-h-dvh justify-center px-4">
          <h1 className="bg-gradient-to-br from-neutral-700 to-neutral-500 bg-clip-text text-center font-Fancy text-3xl font-bold uppercase text-transparent dark:from-neutral-400 dark:to-neutral-600 lg:text-4xl">
            fàq
          </h1>
          <div className="grid gap-4 pt-10">
            <Fàq />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
