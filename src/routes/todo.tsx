import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import EditForm from "../components/todo/EditForm";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import { useTodos } from "../hooks/useTodos";

export const Route = createFileRoute("/todo")({
  component: Todo,
});

function Todo() {
  document.title = "risat | Todo";

  const { text, isEdited } = useTodos();

  // show form
  const [show, setShow] = useState(false);
  const showForm = () => {
    setShow(!show);
  };

  const { t } = useTranslation("global");

  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-4 py-4 font-Fancy text-light">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-left-icon lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>
        </nav>
      </header>

      <main className="bg-white dark:bg-black-500">
        <section className="mx-auto w-full max-w-2xl px-4 pt-6">
          {show && <TodoForm showForm={showForm} />}
          {/* Add todo */}
          <div className="pointer-events-none fixed bottom-12 left-0 right-0 flex justify-center">
            <div className="pointer-events-auto flex w-full max-w-2xl justify-end pr-6">
              <button
                type="button"
                title={t("TODO.create")}
                aria-label={t("TODO.create")}
                className="rounded-full bg-yellow-600 p-1 text-light transition-colors duration-300 hover:bg-yellow-500"
                onClick={showForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus-icon lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
          </div>

          {text.length == 0 && (
            <p className="pt-24 text-center font-medium dark:text-light">
              {t("TODO.no_todo")}
            </p>
          )}

          {isEdited && <EditForm />}

          {text && <TodoList />}
        </section>
      </main>
    </article>
  );
}
