import { useContext } from "react";
import { TodoContext } from "../../context/Todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { text } = useContext(TodoContext);

  return (
    <ul className="grid gap-1 dark:text-light lg:gap-3">
      {text.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
