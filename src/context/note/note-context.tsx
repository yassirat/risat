import { createContext, SetStateAction } from "react";

export type NoteProps = {
  id: string;
  title: string;
  desc: string;
  time: Date;
  createdAt: string;
  updatedAt: string;
};

export interface NoteTypes {
  notes: NoteProps[];
  editedNote: NoteProps | null;
  isEditedNote: boolean;
  addNote(task: NoteProps): void;
  deleteNote(id: string): void;
  deleteAll(): void;
  modifyEdit(task: {
    title: string | undefined;
    desc: string | undefined;
  }): void;
  closeEditForm(): void;
  showEditForm(task: SetStateAction<NoteProps | null>): void;
  getNoteById: (id: string) => NoteProps | undefined;
}

export const NoteContext = createContext<NoteTypes | undefined>(undefined);
