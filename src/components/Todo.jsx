// Todo.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const [namaAktivitas, setNamaAktivitas] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [targetTanggalSelesai, setTargetTanggalSelesai] = useState("");
  const [penanggungJawab, setPenanggungJawab] = useState("");
  const [lampiran, setLampiran] = useState(null);
  const [catatan, setCatatan] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodoClick = () => {
    if (namaAktivitas.trim() !== "") {
      const newTodoData = {
        namaAktivitas,
        tanggalMulai,
        targetTanggalSelesai,
        penanggungJawab,
        lampiran,
        catatan,
      };
      dispatch(addTodo(newTodoData));

      // Reset form
      setNamaAktivitas("");
      setTanggalMulai("");
      setTargetTanggalSelesai("");
      setPenanggungJawab("");
      setLampiran(null);
      setCatatan("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  const handleLampiranChange = (e) => {
    setLampiran(e.target.files[0]);
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>

      {/* Form Input */}
      <div className="mb-4">
        <div className="flex flex-col mb-4">
          <label>Nama Aktivitas</label>
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            value={namaAktivitas}
            onChange={(e) => setNamaAktivitas(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Tanggal Mulai</label>
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="date"
            value={tanggalMulai}
            onChange={(e) => setTanggalMulai(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Target Tanggal Selesai</label>
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="date"
            value={targetTanggalSelesai}
            onChange={(e) => setTargetTanggalSelesai(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Penanggung Jawab</label>
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            value={penanggungJawab}
            onChange={(e) => setPenanggungJawab(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Lampiran</label>
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="file"
            onChange={handleLampiranChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Catatan</label>
          <textarea
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} /> Tambah Todo
        </button>
      </div>

      {/* Filter dan Pencarian */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Cari Aktivitas"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* Daftar Todo */}
      <TodoList />
    </div>
  );
};

export default Todo;
