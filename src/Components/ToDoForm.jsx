import { useState } from 'react';
import React from 'react';
export default function ToDoForm(
  toDoInputValue,
  setTodos,
  setToDoInputValue,
  todos
) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        setTodos([
          ...todos,

          /*   {
            name: toDoInputValue,
            id: nanoid(),
          }, */
        ]);

        setToDoInputValue('');
      }}
    >
      <input
        required
        type="text"
        placeholder="new todo"
        //value={toDoInputValue}
        onChange={event => {
          setToDoInputValue(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
