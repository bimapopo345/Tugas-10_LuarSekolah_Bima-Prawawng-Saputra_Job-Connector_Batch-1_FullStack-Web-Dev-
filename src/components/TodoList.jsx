// TodoList.jsx
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch =
        todo.namaAktivitas.toLowerCase().includes(searchTerm) ||
        todo.penanggungJawab.toLowerCase().includes(searchTerm) ||
        (todo.catatan && todo.catatan.toLowerCase().includes(searchTerm));

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <ul>
      <li className="my-2 text-sm italic">Daftar Aktivitas Anda:</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
