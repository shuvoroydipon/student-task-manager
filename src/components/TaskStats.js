import React from 'react';

function TaskStats({ total, completed }) {
  const remaining = total - completed;

  return (
    <div className="stats">
      <div>
        <h3>{total}</h3>
        <p>Total Tasks</p>
      </div>
      <div>
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>
      <div>
        <h3>{remaining}</h3>
        <p>Remaining</p>
      </div>
    </div>
  );
}

export default TaskStats;