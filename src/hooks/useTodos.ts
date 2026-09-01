import { useContext } from "react";
import { TodoContext } from "../context/todo/todo-context";

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within TodosProvider");
  }
  return context;
};
