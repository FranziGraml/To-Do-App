import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './Components/Listmap';
import Form from './Components/Form';
import EditForm from './Components/EditForm';

function App() {
  const [toDoInputValue, setToDoInputValue] = useState('');
  const [toEdit, setToEdit] = useState(false);
  const [index, setIndex] = useState('');
  const [itemName, setItemName] = useState('');
  const [changedItemName, setChangedItemName] = useState('');
  const [todos, setTodos] = useState([
    {
      name: 'todolist bauen',
      id: nanoid(),
    },
  ]);
  console.log('toEdit: ' + toEdit);

  function editItemName(todo, index) {
    setToEdit(!toEdit);
    setIndex(index);
    setItemName(todo.name);
  }
  function FormSubmit() {
    const newTodos = todos;
    newTodos[index].name = changedItemName;
    setTodos(newTodos);
    setToEdit(!toEdit);
  }

  return (
    <>
      <h1>Todo List</h1>
      <Form
        toDoInputValue={toDoInputValue}
        setTodos={setTodos}
        setToDoInputValue={setToDoInputValue}
        todos={todos}
      />
      {toEdit ? (
        <EditForm
          itemName={itemName}
          onFormSubmit={FormSubmit}
          setChangedItemName={setChangedItemName}
        />
      ) : (
        ''
      )}
      {/* ternary operator: <Bedingung(boolean)> ? <Wird-bei-true-ausgeführt> : <wird-bei-false-ausgeführt> */}
      <List
        todos={todos}
        setTodos={setTodos}
        onEditItemName={editItemName}
        toEdit={toEdit}
      />
    </>
  );
}
export default App;
