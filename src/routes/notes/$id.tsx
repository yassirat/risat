import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import EditNote from "../../components/note/EditNote";
import { useNotes } from "../../hooks/useNotes";

export const Route = createFileRoute("/notes/$id")({
  component: NoteContent,
  loader: async ({ params }) => {
    return {
      id: params.id,
    };
  },
});

function NoteContent() {
  const { id } = Route.useParams();

  const { getNoteById, showEditForm, deleteNote, isEditedNote } = useNotes();

  const note = getNoteById(id);
  const navigate = useNavigate();

  if (!note) {
    return (
      <div className="flex min-h-dvh w-full items-center justify-center dark:bg-zinc-950 dark:text-neutral-100">
        Note not found
      </div>
    );
  }

  const removeNote = () => {
    setTimeout(() => {
      deleteNote(note.id);
      navigate({ to: "/notes" });
    }, 500);
  };

  return (
    <article className="min-h-dvh w-full dark:bg-zinc-950">
      {/* Navbar */}
      <header className="p-4 dark:text-neutral-50">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/notes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-left-icon lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-2 px-4 text-neutral-100">
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-lime-800 px-2 py-1 text-zinc-100 transition-colors duration-200 ease-in-out hover:bg-lime-700 active:bg-lime-700"
              title="Edit"
              aria-label={`edit ${note.title}`}
              onClick={() => showEditForm(note)}
            >
              <span className="hidden text-sm font-medium md:block">Edit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-pen-icon lucide-square-pen"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-red-700 px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-red-600"
              title="Delete"
              aria-label={`delete ${note.title}`}
              onClick={removeNote}
            >
              <span className="hidden text-sm font-medium md:block">
                Delete
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash2-icon lucide-trash-2"
              >
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-lg gap-4 px-4 pt-4" key={id}>
        <div className="flex items-center justify-center">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
            {note.updatedAt
              ? new Date(note.updatedAt).toLocaleString()
              : new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="animate-fadeIn break-words rounded text-lg font-semibold first-letter:capitalize dark:text-white xl:text-xl">
            {note.title}
          </h3>
          <p
            className="animate-fadeIn break-all text-sm leading-normal dark:text-neutral-200"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {note.desc}
          </p>
        </div>
      </section>

      {/* show edit */}
      {isEditedNote && <EditNote />}
    </article>
  );
}
