import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import noteImg from "../assets/img/notes.jpg";
import passImg from "../assets/img/pass.jpg";
import qrImg from "../assets/img/qr.jpg";
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
    {
      id: 4,
      title: `${t("dashboard.qr")}`,
      href: "/qr-generator",
      img: qrImg,
    },
  ];

  // container z-20 mx-auto grid min-h-dvh animate-fadeIn place-content-center gap-6 px-8 lg:place-items-center

  return (
    <main className="z-10 my-20 grid place-content-center">
      <section className="mx-auto grid h-full w-full max-w-3xl animate-fadeIn place-content-center place-items-center gap-8 px-8 py-4 dark:text-light lg:grid-cols-2 lg:gap-12 lg:px-0 lg:py-0">
        {tools.map((tool) => {
          return (
            <Link
              key={tool.id}
              to={tool.href}
              className="animate-fadeLeft flex w-full items-center overflow-hidden rounded-xl bg-white shadow-dark transition hover:scale-105 dark:bg-zinc-950 dark:shadow-lightWhite"
            >
              <img
                src={tool.img}
                alt={tool.img}
                loading="lazy"
                className="h-24 w-1/2 object-cover lg:h-32"
              />
              <div className="grid w-1/2 place-items-center gap-2 px-2">
                <h2 className="animate-fadeUp bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-center text-lg font-bold text-transparent dark:from-neutral-300 dark:to-neutral-200 md:text-xl lg:text-2xl">
                  {tool.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Dashbord;
