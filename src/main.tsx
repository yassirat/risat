import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { Toaster } from "sonner";
import enTranslation from "../src/translations/en/local.json";
import frTranslation from "../src/translations/fr/local.json";
import App from "./App.tsx";
import { LangProvider } from "./context/LangSwitcher.tsx";
import { NoteProvider } from "./context/Note.tsx";
import { ThemeProvider } from "./context/theme.tsx";
import { TodoContextProvider } from "./context/Todo.tsx";
import "./index.css";

const resources = {
  en: {
    global: enTranslation,
  },
  fr: {
    global: frTranslation,
  },
};

i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",

    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "querystring",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "../src/translations/{{lng}}/local.json",
    },
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <LangProvider>
          <TodoContextProvider>
            <NoteProvider>
              <App />
            </NoteProvider>
            <Toaster richColors position="bottom-right" />
          </TodoContextProvider>
        </LangProvider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
);
