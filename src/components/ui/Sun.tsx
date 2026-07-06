import { useTheme } from "../../hooks/useTheme";

export const SunBtn = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme">
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
        className="size-5"
        data-darkreader-inline-stroke=""
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
          data-darkreader-inline-stroke=""
        ></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M12 3l0 18"></path>
        <path d="M12 9l4.65 -4.65"></path>
        <path d="M12 14.3l7.37 -7.37"></path>
        <path d="M12 19.6l8.85 -8.85"></path>
      </svg>
    </button>
  );
};
