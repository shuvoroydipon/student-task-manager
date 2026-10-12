import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  const handleDelete = () => {
    // Bonus: Confirmation before delete
    if (window.confirm(`Delete "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-title">{task.title}</span>
        <span className={`status ${task.completed ? 'done' : 'pending'}`}>
          {task.completed ? 'Done' : 'Pending'}
        </span>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;