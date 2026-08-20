import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/qr-generator")({
  component: QrGenerator,
});

function QrGenerator() {
  document.title = "Risat | Qr Generator";

  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("");

  const generateQr = () => {
    const imgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    setSrc(imgUrl);
  };

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

      <main className="bg-white dark:bg-black-500">
        <section className="mx-auto grid w-full max-w-2xl gap-16 px-4 pt-6">
          <div className="grid place-items-center gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter a link"
              className="w-3/4 rounded bg-light px-2 py-1 font-medium shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none dark:bg-black-100 dark:text-light"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoFocus
              required
            />
            <button
              className="rounded bg-blue-700 px-3 py-1 text-sm text-light transition-colors duration-200 ease-in-out hover:bg-blue-600"
              type="button"
              onClick={generateQr}
              aria-label="convert link to a qr code"
            >
              Generate QR Code
            </button>
          </div>
          <img src={src} className="mx-auto" />
        </section>
      </main>
    </article>
  );
}
