import { Link } from "@tanstack/react-router";
import { NoteProps } from "../../context/note-context";

const NoteItem = ({ takeNote }: { takeNote: NoteProps }) => {
  return (
    <Link
      className="mx-auto w-full max-w-lg animate-fadeIn border-b border-zinc-200 p-2"
      key={takeNote.id}
      to="/notes/$id"
      params={{ id: takeNote.id }}
    >
      <li className="grid gap-1">
        <h4 className="text-sm font-semibold first-letter:capitalize">
          {takeNote.title}
        </h4>
        <div className="flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400">
          <span>
            {takeNote.updatedAt
              ? new Date(takeNote.updatedAt).toLocaleDateString()
              : new Date(takeNote.createdAt).toLocaleDateString()}
          </span>
          <span> </span>
          <p>
            {takeNote.desc.length > 20
              ? `${takeNote.desc.slice(0, 25)}...`
              : takeNote.desc}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default NoteItem;
