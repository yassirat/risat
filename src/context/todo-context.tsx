import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export type TaskType = {
  name: string;
  id: string;
  checked: boolean;
  time: number;
  createdAt: string;
};

interface TodoTypes {
  text: TaskType[];
  editedText: TaskType | null;
  isEdited: boolean;
  addText(task: TaskType): void;
  deleteText(id: string): void;
  updateText(id: string): void;
  deleteAll(): void;
  modifyEdit(task: TaskType): void;
  showEditForm(task: SetStateAction<TaskType | null>): void;
  closeEditForm(): void;
}

export const TodoContext = createContext<TodoTypes | undefined>({
  text: [],
  editedText: null,
  isEdited: false,
  addText() {},
  deleteText() {},
  updateText() {},
  deleteAll() {},
  modifyEdit() {},
  showEditForm() {},
  closeEditForm() {},
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("global");

  const storedTasks = localStorage.getItem("task");
  const [text, setText] = useState<TaskType[]>(
    storedTasks ? JSON.parse(storedTasks) : [],
  );
  //Open Editing Form:
  const [isEdited, setIsEdited] = useState(false);
  //Edit Todo:
  const [editedText, setEditedText] = useState<TaskType | null>(null);
  // Completed todos:

  const addText = (task: TaskType) => {
    setText((prevTask) => [...prevTask, task]);
    toast.success(t("TODO.toast"));
  };

  const deleteText = (id: string) => {
    setText((prevTask) => prevTask.filter((t: { id: string }) => t.id !== id));
    toast.success(t("TODO.toast_delete"));
  };

  const deleteAll = () => {
    setText([]);
    toast.success(t("TODO.allTodos"));
  };

  const updateText = (id: string) => {
    setText((prevTask) =>
      prevTask.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  };

  const modifyEdit = (task: TaskType) => {
    setText((prevTask) =>
      prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)),
    );
    closeEditForm();
    toast.success(t("TODO.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEdited(false);
  };

  const showEditForm = (task: SetStateAction<TaskType | null>) => {
    setEditedText(task);
    setIsEdited(true);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(text));
  }, [text]);

  return (
    <TodoContext.Provider
      value={{
        text,
        addText,
        deleteText,
        updateText,
        deleteAll,
        modifyEdit,
        showEditForm,
        closeEditForm,
        isEdited,
        editedText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
