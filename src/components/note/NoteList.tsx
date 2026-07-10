import { NoteProps } from "../../context/note-context";
import { useNotes } from "../../hooks/useNotes";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNotes();

  const getLastModifiedDate = (note: NoteProps) => {
    return new Date(note.updatedAt || note.createdAt).getTime();
  };

  return (
    <ul className="grid gap-4 dark:text-light lg:gap-5">
      {notes
        .sort((a, b) => getLastModifiedDate(b) - getLastModifiedDate(a))
        .map((takeNote: NoteProps) => (
          <NoteItem key={takeNote.id} takeNote={takeNote} />
        ))}
    </ul>
  );
};

export default NoteList;
