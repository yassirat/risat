import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#30475e] px-6 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-light">
          {t("footer.right")}{" "}
          <a
            href="https://yassiraterta.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase hover:underline"
          >
            yassir
          </a>
          {""} &copy; {new Date().getFullYear()}
        </p>
        <p className="text-xs font-medium tracking-wide text-light">
          {t("footer.data")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
