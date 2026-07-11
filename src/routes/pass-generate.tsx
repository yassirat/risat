import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { useForm } from "../components/password/UseForm";
import { getRandomChar, getSpecialChar } from "../components/password/utils";

export const Route = createFileRoute("/pass-generate")({
  component: Password,
});

function Password() {
  document.title = "risat | Password manager";

  const { t } = useTranslation("global");

  const [val, setVal] = useForm({
    length: 8,
    capital: true,
    small: true,
    number: false,
    symbol: false,
  });

  const [result, setResult] = useState("");

  const fieldsArr = [
    {
      field: val.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: val.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: val.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: val.symbol,
      getChar: () => getSpecialChar(),
    },
  ];

  const sumbitForm = (e: FormEvent) => {
    e.preventDefault();
    let generatedPass = "";
    const typeArr = fieldsArr.filter(({ field }) => field);
    for (let i = 0; i < val.length; i++) {
      const index = Math.floor(Math.random() * typeArr.length);
      const letter = typeArr[index].getChar();

      if (letter) {
        generatedPass += letter;
      }
      if (generatedPass) {
        setResult(generatedPass);
      }
    }
  };

  const copyBtn = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success(`${t("password.success")}`);
    } else {
      toast.error(`${t("password.error")}`);
    }
  };

  const labels = [
    {
      id: 1,
      name: "capital",
      htmlId: "capital",
      label: `${t("password.capital")}`,
      value: val.capital,
    },
    {
      id: 2,
      name: "small",
      htmlId: "small",
      label: `${t("password.lower")}`,
      value: val.small,
    },
    {
      id: 3,
      name: "number",
      htmlId: "number",
      label: `${t("password.number")}`,
      value: val.number,
    },
    {
      id: 4,
      name: "symbol",
      htmlId: "symbol",
      label: `${t("password.symbol")}`,
      value: val.symbol,
    },
  ];

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
                {t("dashboard.pass")}
              </h3>
            </div>
          </Link>
        </nav>
      </header>

      <main className="flex items-center justify-center bg-white dark:bg-black-500">
        <form
          onSubmit={sumbitForm}
          className="container grid w-full animate-fadeIn gap-6 px-8 lg:w-2/5"
        >
          <input
            type="text"
            value={result}
            readOnly
            className="w-full rounded-sm border border-solid border-slate-900 bg-transparent px-2 py-1 text-sm font-medium tracking-wider text-black-500 focus:outline-none dark:border-light dark:text-light md:text-base"
          />
          <div className="flex items-center justify-center gap-4">
            <p className="font-mono font-semibold capitalize text-gray-700 dark:text-gray-400">
              {t("password.length")}
            </p>

            <input
              type="number"
              inputMode="numeric"
              min={8}
              max={16}
              name="length"
              value={val.length}
              onChange={setVal}
              className="w-16 rounded-md border border-solid border-slate-900 bg-transparent px-2 py-1 text-sm font-medium tracking-wider text-black-500 focus:outline-none dark:border-light dark:text-light"
            />
          </div>
          <div className="grid gap-4">
            {labels.map((item) => {
              return (
                <div
                  className="flex items-center justify-between px-4 md:px-8 lg:px-12"
                  key={item.id}
                >
                  <label
                    className="text-sm font-medium text-gray-700 dark:text-gray-400"
                    htmlFor={item.htmlId}
                  >
                    {item.label}
                  </label>
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.htmlId}
                    value={item.value}
                    onChange={setVal}
                    className="p-2 focus:outline-none"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="submit"
              className="rounded bg-green-700 px-4 py-1 text-xs font-semibold capitalize tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-green-600 md:text-sm"
              aria-label="Generate Password"
            >
              {t("password.btn")}
            </button>
            <span
              onClick={copyBtn}
              className="cursor-pointer rounded bg-rose-700 px-4 py-1 text-xs font-semibold capitalize tracking-wide text-neutral-100 transition-colors duration-300 ease-in-out hover:bg-rose-600 md:text-sm"
              aria-label="Copy Password"
            >
              {t("password.copy")}
            </span>
          </div>
        </form>
      </main>
    </article>
  );
}
