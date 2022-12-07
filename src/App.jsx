import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
//import ToDoForm from './Components/ToDoForm';
import List from './Components/Listmap';
import Form from './Components/Form';

function App() {
  const [toDoInputValue, setToDoInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      name: 'todolist bauen',
      id: nanoid(),
    },
  ]);

  return (
    <>
      <h1>Todo List</h1>
      {/* <ToDoForm
        toDoInputValue={toDoInputValue}
        setTodos={setTodos}
        setToDoInputValue={setToDoInputValue}
        todos={todos}
      /> */}
      <Form
        toDoInputValue={toDoInputValue}
        setTodos={setTodos}
        setToDoInputValue={setToDoInputValue}
        todos={todos}
      />
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
