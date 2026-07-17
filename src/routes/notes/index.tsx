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
  const { notes } = useNotes();
  // show form
  const [show, setShow] = useState(false);
  const showForm = () => {
    setShow(!show);
  };

  const { t } = useTranslation("global");

  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 p-4 font-Fancy text-light">
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

      <main className="dark:bg-zinc-950">
        <section className="mx-auto w-full max-w-2xl px-6 pt-6">
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
          {notes.length == 0 && (
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
