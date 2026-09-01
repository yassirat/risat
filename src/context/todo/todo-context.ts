import { createContext, Dispatch, SetStateAction } from "react";

export type TaskType = {
  name: string;
  id: string;
  checked: boolean;
  time: number;
  createdAt: string;
};

export interface TodoTypes {
  text: TaskType[];
  editedText: TaskType | null;
  isEdited: boolean;
  showBtns: string | null;
  setShowBtns: Dispatch<SetStateAction<string | null>>;
  addText(task: TaskType): void;
  deleteText(id: string): void;
  updateText(id: string): void;
  deleteAll(): void;
  modifyEdit(task: TaskType): void;
  showEditForm(task: SetStateAction<TaskType | null>): void;
  closeEditForm(): void;
}

export const TodoContext = createContext<TodoTypes | undefined>(undefined);
