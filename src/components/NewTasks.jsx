import React, { useState } from 'react';

const NewTasks = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}  {/* Fix the comment syntax here */}
        value={enteredTask}
      />
      <button className="text-stone-800 mb-4" onClick={handleClick}>
        Add Tasks
      </button>
    </div>
  );
};

export default NewTasks;
