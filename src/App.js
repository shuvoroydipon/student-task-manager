import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Basics', completed: true },
    { id: 2, title: 'Build a Task Manager', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  // Add Task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter Logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app">
      <h1>📚 Student Task Manager</h1>

      {/* Add Task Form */}
      <Card>
        <TaskForm onAddTask={addTask} />
      </Card>

      {/* Statistics */}
      <Card>
        <TaskStats total={tasks.length} completed={completedCount} />
      </Card>

      {/* Filter Buttons */}
      <div className="filters">
        {['all', 'completed', 'pending'].map((f) => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;