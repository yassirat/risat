import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";

type Transaction = {
  id: number;
  description: string;
  amount: number;
};

export const Route = createFileRoute("/expense")({
  component: Expense,
});

function Expense() {
  const storedTrack = JSON.parse(localStorage.getItem("track") || "[]");

  const [transaction, setTransaction] = useState(storedTrack);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("track", JSON.stringify(transaction));
  }, [transaction]);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (edit) {
      const newTransaction = transaction.map((item: { id: number }) => {
        if (item.id === edit) {
          return { id: edit, description, amount };
        } else {
          return item;
        }
      });
      setTransaction(newTransaction);
      setEdit(null);
    } else {
      setTransaction([...transaction, { id: Date.now(), description, amount }]);
    }
    setDescription("");
    setAmount(0);
    showForm();
  };

  const deleteItem = (id: number) => {
    setTransaction((prevTr: Transaction[]) =>
      prevTr.filter((t: { id: number }) => t.id !== id),
    );
  };

  const { t } = useTranslation("global");
  const [show, setShow] = useState(false);
  const showForm = () => {
    setShow(!show);
  };

  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
      {/* Navbar */}
      <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-4 py-3 font-Fancy text-light">
        <nav className="mx-auto max-w-3xl">
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
              <h3 className="font-Fancy font-semibold tracking-wide transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-0 after:rounded-md after:bg-white hover:after:w-16 md:tracking-wider">
                {t("dashboard.expense")}
              </h3>
            </div>
          </Link>
        </nav>
      </header>

      <main className="flex w-full items-start justify-center bg-white dark:bg-black-500">
        <section className="container grid w-full max-w-lg animate-fadeIn gap-7 px-8 pt-10">
          {show && (
            <ExpenseForm
              submitForm={submitForm}
              description={description}
              setDescription={setDescription}
              amount={amount}
              setAmount={setAmount}
              showForm={showForm}
            />
          )}

          <ExpenseList transaction={transaction} deleteItem={deleteItem} />
        </section>
      </main>

      <button
        type="button"
        title={t("TODO.create")}
        aria-label={t("TODO.create")}
        className="fixed bottom-10 right-8 rounded-full bg-yellow-600 p-1 text-light transition-colors duration-300 hover:bg-yellow-500"
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
    </article>
  );
}
