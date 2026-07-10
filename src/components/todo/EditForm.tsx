import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTodos } from "../../hooks/useTodos";

const EditForm = () => {
  const { modifyEdit, editedText, closeEditForm } = useTodos();

  const [editTodo, setEditTodo] = useState(editedText?.name ?? "");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedText) return;
    modifyEdit({ ...editedText, name: editTodo.trim() });
  };

  const { t } = useTranslation("global");

  return (
    <main className="absolute left-0 top-0 z-50 flex min-h-dvh w-full items-center justify-center px-8 backdrop-blur">
      <button
        type="button"
        className="absolute right-4 top-48 rounded-full bg-slate-900 p-1 transition duration-200 ease-in-out hover:bg-slate-800 lg:right-72 lg:p-2"
        onClick={closeEditForm}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-7 text-white"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <form
        onSubmit={formSubmit}
        className="mx-auto flex flex-1 items-center justify-center gap-2 backdrop-blur-xl lg:max-w-xl"
      >
        <input
          type="text"
          className="w-full rounded bg-slate-950 px-2 py-1 text-sm font-medium text-white shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none lg:px-3 lg:py-2"
          placeholder={t("TODO.todo_modify")}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          autoFocus
          required
        />
        <button
          className="rounded bg-blue-700 p-1 text-light transition-colors duration-200 ease-in-out hover:bg-blue-600 lg:p-2"
          type="submit"
          aria-label="edit todo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 lg:size-6"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </main>
  );
};

export default EditForm;
