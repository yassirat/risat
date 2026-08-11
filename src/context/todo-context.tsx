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
  showBtns: boolean;
  addText(task: TaskType): void;
  deleteText(id: string): void;
  updateText(id: string): void;
  deleteAll(): void;
  modifyEdit(task: TaskType): void;
  showEditForm(task: SetStateAction<TaskType | null>): void;
  closeEditForm(): void;
  showButtons(): void;
}

export const TodoContext = createContext<TodoTypes | undefined>({
  text: [],
  editedText: null,
  isEdited: false,
  showBtns: false,
  addText() {},
  deleteText() {},
  updateText() {},
  deleteAll() {},
  modifyEdit() {},
  showEditForm() {},
  closeEditForm() {},
  showButtons() {},
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

  const [showBtns, setShowBtns] = useState(false);

  const addText = (task: TaskType) => {
    setText((prevTask) => [...prevTask, task]);
    toast.success(t("TODO.toast"));
  };

  const deleteText = (id: string) => {
    setText((prevTask) => prevTask.filter((t: { id: string }) => t.id !== id));
    toast.success(t("TODO.toast_delete"));
    setShowBtns(!showBtns);
  };

  const deleteAll = () => {
    setText([]);
    toast.success(t("TODO.allTodos"));
  };

  const updateText = (id: string) => {
    setText((prevTask) =>
      prevTask.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
    setShowBtns(true);
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
    setShowBtns(!showBtns);
  };

  const showButtons = () => {
    setShowBtns(!showBtns);
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
        showBtns,
        showButtons,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
