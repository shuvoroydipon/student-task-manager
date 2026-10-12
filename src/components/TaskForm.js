import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!title.trim()) {
      setError('Task title cannot be empty!');
      return;
    }

    onAddTask(title.trim());
    setTitle('');
    setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError('');
        }}
      />
      <button type="submit">Add Task</button>
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
}

export default TaskForm;