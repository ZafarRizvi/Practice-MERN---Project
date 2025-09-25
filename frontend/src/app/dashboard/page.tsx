"use client";
import React, { useState } from "react";

const DashboardPage = () => {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/todo/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data));
    } catch (err) {
      setResponse("Error: " + err);
    }
  };

  return (
    <div className="bg-[#020068] flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-white text-3xl mb-4">Todo List</h1>
      <form className="space-x-2" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
          className="border px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 border-2 border-blue-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default DashboardPage;
