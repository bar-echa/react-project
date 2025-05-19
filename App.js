import React, { useState } from 'react';
import './App.css'; // Optional: For better organization, keep styles here

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
