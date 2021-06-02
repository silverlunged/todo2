import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import React, { useState } from "react";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task =>
    <Todo editTask={editTask} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} name={task.name} key={task.id} id={task.id} completed={task.completed} />
  );
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id ===id) {
        return {...task, completed: !task.completed};
      }
      return task;
    })
    setTasks(updatedTasks);
  }
  function addTask(name) {
    const newTask = { id: nanoid(), completed: false, name: name };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName};
      }
      return task;
    })
    setTasks(editedTasks);
  }
  const headingText = `${taskList.length} tasks remaining`;
  return (
    <div>
      <h1>ToDo Matic</h1>
      <h2>What needs to be done?</h2>

      <Form addTask={addTask} />
      <FilterButton />
      <h2>{headingText}</h2>
      <ul>
        {taskList}
      </ul>

    </div>
  );
}

export default App;
