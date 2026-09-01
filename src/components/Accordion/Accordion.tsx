import { useRef, useState } from "react";
import { useAccordion } from "../../hooks/useAccordion";
import { AccordionContext } from "./AccordionContext";

type AccordionProps = {
  children: React.ReactNode;
  value: string | null;
  className?: string;
};

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  className?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  value,
  ...props
}) => {
  const [selected, setSelected] = useState<string | null>(value);

  return (
    <ul {...props} className="mx-auto grid w-full gap-4 md:w-2/4">
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
};

export const AccordionItem = ({
  children,
  value,
  trigger,
  ...props
}: AccordionItemProps) => {
  const { selected, setSelected } = useAccordion();

  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li
      className="rounded border-b border-gray-800 px-4 py-2 font-medium backdrop-blur-md dark:border-light dark:text-light"
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-center justify-between text-sm font-medium lg:text-base"
      >
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down-icon lucide-chevron-down transition duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </header>
      <div
        className="overflow-y-hidden transition-all duration-300 ease-in-out"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <p
          className="py-3 pr-4 text-xs text-neutral-700 dark:text-neutral-300 lg:text-sm"
          ref={ref}
        >
          {children}
        </p>
      </div>
    </li>
  );
};
