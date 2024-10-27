"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo.trim(), completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setIsEditing(index);
    setEditedText(todos[index].text);
  };

  const saveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editedText.trim() } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(null);
    setEditedText("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <main>
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
        <h1 className="font-extrabold text-3xl text-gray-700 mb-6 text-center">
          My To-Do List
        </h1>

        <textarea
          className="border border-gray-300 p-4 w-full rounded-md mb-4 resize-none outline-none focus:border-blue-400 transition"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your task here"
        ></textarea>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mb-6 transition"
          onClick={addTodo}
        >
          Add Task
        </button>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 mb-4 rounded-md shadow-md transition ${
                todo.completed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  className="mr-3 h-5 w-5 text-blue-500 rounded-full border-gray-300 focus:ring-blue-400 transition"
                />
                {isEditing === index ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md flex-grow outline-none focus:border-blue-400 transition"
                  />
                ) : (
                  <span
                    className={`text-lg font-medium ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                {isEditing === index ? (
                  <>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-md transition hover:bg-green-600"
                      onClick={() => saveEdit(index)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-400 text-white px-3 py-1 rounded-md transition hover:bg-gray-500"
                      onClick={() => setIsEditing(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md transition hover:bg-blue-600"
                      onClick={() => startEditing(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md transition hover:bg-red-600"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
