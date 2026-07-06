import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import noteImg from "../assets/img/notes.jpg";
import passImg from "../assets/img/pass.jpg";
import todoImg from "../assets/img/todo.jpg";

const Dashbord = () => {
  const { t } = useTranslation("global");

  const tools = [
    {
      id: 1,
      title: `${t("dashboard.list")}`,
      href: "/todo",
      img: todoImg,
    },
    {
      id: 2,
      title: `${t("dashboard.note")}`,
      href: "/notes",
      img: noteImg,
    },
    {
      id: 3,
      title: `${t("dashboard.pass")}`,
      href: "/pass-generate",
      img: passImg,
    },
  ];

  // container z-20 mx-auto grid min-h-dvh animate-fadeIn place-content-center gap-6 px-8 lg:place-items-center

  return (
    <main className="z-10 grid place-content-center dark:bg-zinc-950">
      <section className="mx-auto grid w-full max-w-4xl animate-fadeIn place-content-center place-items-center gap-8 px-8 py-4 dark:text-light lg:grid-cols-2 lg:gap-12 lg:px-0 lg:py-0">
        {tools.map((tool) => {
          return (
            <div
              className="animate-fadeLeft flex w-full items-center overflow-hidden rounded-xl bg-white shadow-dark dark:shadow-lightWhite"
              key={tool.id}
            >
              <img
                src={tool.img}
                alt={tool.img}
                className="w-1/2 object-cover"
              />
              <div className="grid w-1/2 place-items-center gap-2 px-2">
                <h2 className="animate-fadeUp bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-center text-xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-400 lg:text-2xl">
                  {tool.title}
                </h2>

                <Link
                  className="flex items-center gap-2 text-sm font-medium text-blue-700 transition-colors duration-200 ease-in-out hover:text-blue-600 lg:text-base"
                  to={tool.href}
                >
                  {t("dashboard.link")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Dashbord;
