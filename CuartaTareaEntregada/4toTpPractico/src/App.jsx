import { useState } from 'react'
import AddTaks from './components/AddTask/AddTaks';
import TaskList from './components/TaskList/TaskList';
import "./App.css"

const App = () =>{
    const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks((prevState) => prevState.concat(newTask));
  };

  const handleToggleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <header>
        <h1>Lista de Tareas</h1>
        <AddTaks onAddTask={handleAddTask} />
      </header>
      <main>
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onRemoveTask={handleRemoveTask}
        />
      </main>
    </div>
  );
}

export default App;

