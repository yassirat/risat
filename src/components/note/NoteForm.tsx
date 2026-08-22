import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotes } from "../../hooks/useNotes";

const NoteForm = ({ showForm }: { showForm: () => void }) => {
  const { t } = useTranslation("global");

  const { addNote } = useNotes();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote({
      id: crypto.randomUUID(),
      title,
      desc,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      time: new Date(),
    });
    setTitle("");
    setDesc("");
    showForm();
  };

  return (
    <main className="absolute left-0 top-0 z-50 flex min-h-dvh w-full items-center justify-center px-8 backdrop-blur-sm">
      <button
        type="button"
        className="absolute right-4 top-28 animate-fadeIn rounded-full bg-slate-900 p-1 transition duration-200 ease-in-out hover:bg-slate-700 lg:right-64"
        onClick={showForm}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6 text-white"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <form
        onSubmit={formSubmit}
        className="mx-auto grid w-full max-w-lg gap-2 backdrop-blur-xl"
      >
        <input
          type="text"
          placeholder={t("Note.note_title")}
          className="w-full rounded bg-light px-2 py-1 text-sm font-medium shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none dark:bg-black-100 dark:text-light"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          required
        />
        <textarea
          rows={10}
          cols={30}
          placeholder={t("Note.note_desc")}
          className="w-full rounded bg-light px-2 py-1 text-sm font-medium text-white shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none dark:bg-black-100 dark:text-light"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>
        <button
          className="mx-auto rounded bg-blue-700 p-1 text-light transition-colors duration-200 ease-in-out hover:bg-blue-600"
          type="submit"
          aria-label="add todo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
    </main>
  );
};

export default NoteForm;
