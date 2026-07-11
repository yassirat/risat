import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import NoteForm from "../../components/note/NoteForm";
import NoteList from "../../components/note/NoteList";
import { useNotes } from "../../hooks/useNotes";

export const Route = createFileRoute("/notes/")({
  component: Notes,
});

function Notes() {
  document.title = "risat | Notes";

  // form
  const { notes, deleteAll } = useNotes();
  // show form
  const [show, setShow] = useState(false);
  const showForm = () => {
    setShow(!show);
  };

  const { t } = useTranslation("global");

  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-4 py-4 text-light">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <div className="relative">
              <h3 className="font-Fancy font-semibold tracking-wide transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-0 after:rounded-md after:bg-white hover:after:w-10 md:tracking-wider">
                {t("dashboard.note")}
              </h3>
            </div>
          </Link>
        </nav>
      </header>

      <main className="dark:bg-zinc-950">
        <section className="mx-auto w-full max-w-2xl px-4 pt-6">
          {show && <NoteForm showForm={showForm} />}
          <div className="pointer-events-none fixed bottom-12 left-0 right-0 flex justify-center">
            <div className="pointer-events-auto flex w-full max-w-xl justify-end pr-6">
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
          {notes.length != 0 ? (
            <>
              <button
                type="button"
                onClick={deleteAll}
                title={t("dashbord.deleteAll")}
                className="mb-4 ml-auto flex items-center gap-1 rounded bg-red-700 px-3 py-1 text-xs text-light transition-colors duration-200 ease-in-out hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-icon lucide-trash"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
                <span>({notes.length})</span>
              </button>
            </>
          ) : (
            <p className="animate-fadeIn pt-24 text-center font-medium dark:text-light">
              {t("Note.no_note")}
            </p>
          )}

          {notes && <NoteList />}
        </section>
      </main>
    </article>
  );
}
