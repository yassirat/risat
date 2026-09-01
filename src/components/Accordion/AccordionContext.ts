import { createContext, Dispatch, SetStateAction } from "react";

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  className?: string;
};

interface AccordionContextType {
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null,
);
