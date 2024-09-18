// TodoItem.jsx
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <div className="flex flex-col">
          <span
            className={`font-bold ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.namaAktivitas}
          </span>
          <span>Tanggal Mulai: {todo.tanggalMulai}</span>
          <span>Target Selesai: {todo.targetTanggalSelesai}</span>
          <span>Penanggung Jawab: {todo.penanggungJawab}</span>
          <span>Catatan: {todo.catatan}</span>
          {todo.lampiran && (
            <a
              href={URL.createObjectURL(todo.lampiran)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Lihat Lampiran
            </a>
          )}
        </div>
      </div>
      <div className="flex space-x-3 ml-8">
        <button
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
