import { createContext, RefObject } from "react";

interface LangProps {
  hover: boolean;
  setHover: (hover: boolean) => void;
  handleClickOutside(): void;
  buttonRef: RefObject<HTMLButtonElement>;
  menuRef: RefObject<HTMLDivElement>;
}

export const LangContext = createContext<LangProps>({
  hover: false,
  setHover: () => {},
  handleClickOutside() {},
  buttonRef: { current: null },
  menuRef: { current: null },
});
