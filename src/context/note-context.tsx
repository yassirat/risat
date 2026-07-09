import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export type NoteProps = {
  id: string;
  title: string;
  desc: string;
  time: Date;
  createdAt: string;
  updatedAt: string;
};
interface NoteTypes {
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

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("global");

  const storedNote = localStorage.getItem("note");
  const [notes, setNotes] = useState<NoteProps[]>(
    storedNote ? JSON.parse(storedNote) : [],
  );
  //Open Editing Form:
  const [isEditedNote, setIsEditedNote] = useState(false);
  //Edit Note:
  const [editedNote, setEditedNote] = useState<NoteProps | null>(null);

  const addNote = (task: NoteProps) => {
    setNotes((prevTask) => [...prevTask, task]);
    toast.success(t("Note.toast"));
  };

  const deleteNote = (id: string) => {
    setNotes((prevTask) => prevTask.filter((t: { id: string }) => t.id !== id));
    toast.success(t("Note.toast_delete"));
  };

  const deleteAll = () => {
    setNotes([]);
    toast.success(t("Note.allNotes"));
  };

  const modifyEdit = (task: NoteProps) => {
    setNotes((prevTask) =>
      prevTask.map((t) =>
        t.id === task.id
          ? {
              ...t,
              title: task.title ?? "",
              desc: task.desc ?? "",
              updatedAt: new Date().toISOString(),
            }
          : t,
      ),
    );
    closeEditForm();
    toast.success(t("Note.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEditedNote(false);
  };

  const showEditForm = (task: SetStateAction<NoteProps | null>) => {
    setEditedNote(task);
    setIsEditedNote(true);
  };

  const getNoteById = (id: string) => {
    return notes.find((note) => note.id === id);
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        deleteAll,
        modifyEdit,
        showEditForm,
        closeEditForm,
        isEditedNote,
        editedNote,
        getNoteById,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
