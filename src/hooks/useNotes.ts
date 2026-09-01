import { useContext } from "react";
import { NoteContext } from "../context/note/note-context";

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within NotesProvider");
  }
  return context;
};
