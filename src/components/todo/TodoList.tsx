import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { text } = useTodos();

  return (
    <ul className="grid gap-1 dark:text-light lg:gap-3">
      {text.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
