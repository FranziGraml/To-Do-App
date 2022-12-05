import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Form({
  toDoInputValue,
  setTodos,
  setToDoInputValue,
  todos,
}) {
  const handleSubmit = event => {
    event.preventDefault();

    setTodos([
      ...todos,

      {
        name: toDoInputValue,
        id: nanoid(),
      },
    ]);

    setToDoInputValue('');
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        required
        type="text"
        placeholder="new todo"
        value={toDoInputValue}
        onChange={event => {
          setToDoInputValue(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
