import React from 'react';

function ListTask({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => onCompleteTask(index)}>Completar</button>
          <button onClick={() => onDeleteTask(index)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;