import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div>
        <p className="text-stone-800 mb-4">NEW TASK</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            type="button"
            className="mx-5 px-3 py-1 rounded-md bg-stone-800 text-stone-50 hover:text-stone-400"
            onClick={handleAddTask}
          >
            Add
          </button>
          <button
            type="button"
            className="px-3 py-1 rounded-md bg-stone-800 text-stone-50 hover:text-stone-400"
            onClick={handleClearTasks}
          >
            Clear
          </button>
        </form>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-stone-800">
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;