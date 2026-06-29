import { useContext, useState } from "react";
import { TaskType, TodoContext } from "../../context/Todo";

const TodoItem = ({ task }: { task: TaskType }) => {
  const { updateText, showEditForm, deleteText } = useContext(TodoContext);

  const [done, setDone] = useState(task.checked);

  const isComplete = () => {
    setDone(!done);
    updateText(task.id);
  };

  return (
    <li className="mx-auto flex w-full max-w-lg animate-fadeIn items-center justify-between rounded px-2 py-1.5 font-medium shadow-dark dark:shadow-lightWhite">
      <label
        htmlFor={task.id}
        className={`flex cursor-pointer items-center gap-2 text-xs ${done ? "text-neutral-500 line-through dark:text-neutral-400" : ""}`}
      >
        <input
          type="checkbox"
          onChange={isComplete}
          name={task.name}
          id={task.id}
          className="peer hidden"
        />
        <div className="light:bg-[#e8e8e8] flex size-4 rounded-md border border-[#a2a1a833] transition peer-checked:bg-[#7152f3] dark:bg-[#212121]">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="light:stroke-[#e8e8e8] size-4 dark:stroke-[#212121]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>

        {task.name}
      </label>
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
