import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TaskType } from "../../context/todo-context";
import { useTodos } from "../../hooks/useTodos";

const TodoItem = ({ task }: { task: TaskType }) => {
  const { updateText, showEditForm, deleteText } = useTodos();

  const [done, setDone] = useState(task.checked);

  const isComplete = () => {
    setDone(!done);
    updateText(task.id);
  };

  const { t } = useTranslation("global");

  const formatRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Check if it's today
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    }

    // Check if it's yesterday
    if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return `${t("TODO.day")}`;
    }
    return date.toLocaleDateString();
  };

  return (
    <li className="mx-auto flex w-full max-w-lg animate-fadeIn items-end justify-between border-b p-2 font-medium">
      <div className="space-y-1">
        <span className="text-xs text-neutral-600 dark:text-neutral-400">
          {formatRelativeDate(task.createdAt)}
        </span>
        <label
          htmlFor={task.id}
          className={`flex cursor-pointer items-center gap-2 text-sm ${done ? "text-neutral-500 line-through" : ""}`}
        >
          <input
            type="checkbox"
            onChange={isComplete}
            name={task.name}
            id={task.id}
            className="peer hidden"
          />
          <div className="flex size-4 rounded-full border border-[#a2a1a833] bg-zinc-200 transition peer-checked:bg-[#7152f3] dark:bg-zinc-900">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="size-4 stroke-zinc-200 dark:stroke-zinc-900"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>

          {task.name}
        </label>
      </div>
      <div className="flex items-center gap-2 text-light">
        <button
          type="button"
          className="rounded bg-green-700 p-1 transition-colors duration-200 ease-in-out hover:bg-green-600"
          title="Edit"
          aria-label={`edit ${task.name}`}
          onClick={() => showEditForm(task)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-pen-icon lucide-square-pen"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
          </svg>
        </button>
        <button
          type="button"
          className="rounded bg-red-700 p-1 transition-colors duration-200 ease-in-out hover:bg-red-600"
          title="Delete"
          aria-label={`delete ${task.name}`}
          onClick={() => deleteText(task.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash2-icon lucide-trash-2"
          >
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
