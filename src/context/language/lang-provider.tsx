import { ReactNode, useEffect, useRef, useState } from "react";
import { LangContext } from "./lang-context";

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [hover, setHover] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClickOutside();
      }
    };

    if (hover) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [hover]);

  const handleClickOutside = () => {
    setHover((prev) => !prev);
  };

  return (
    <LangContext.Provider
      value={{ hover, setHover, handleClickOutside, buttonRef, menuRef }}
    >
      {children}
    </LangContext.Provider>
  );
};
