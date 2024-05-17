import React, { useState } from 'react';
import ListTask from './components/listTask/ListTask';
import AddTask from './components/addTask/AddTask';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text: text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>Lista de Tareas</h2>
      <AddTask onAddTask={addTask} />
      <ListTask tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
