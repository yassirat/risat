import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-stone-100 p-4 dark:bg-stone-950">
      <p className="text-center text-xs font-medium tracking-wide dark:text-light">
        {t("footer.data")}
      </p>
    </footer>
  );
};

export default Footer;
