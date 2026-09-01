import { ReactNode, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { TaskType, TodoContext } from "./todo-context";

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

  const [showBtns, setShowBtns] = useState<string | null>(null);

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
    setShowBtns(null);
  };

  const modifyEdit = (task: TaskType) => {
    setText((prevTask) =>
      prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)),
    );
    closeEditForm();
    toast.success(t("TODO.toast_edit"));
  };

  const showEditForm = (task: SetStateAction<TaskType | null>) => {
    setEditedText(task);
    setIsEdited(true);
    setShowBtns(null);
  };
  const closeEditForm = () => {
    setIsEdited(false);
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
        setShowBtns,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
