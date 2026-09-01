import { useContext } from "react";
import { AccordionContext } from "../components/Accordion/AccordionContext";

// Custom hook with error handling
export function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }

  return context;
}
