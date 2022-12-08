import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ButtonDelete from './DeleteButton';

export default function List({ id, todos, setTodos, onEditItemName, toEdit }) {
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.name}

              <ButtonDelete id={todo.id} todos={todos} setTodos={setTodos} />

              {/*     <button
                type="button"
                onClick={() => {
                  setTodos(todos.filter(todo_ => todo_.id !== todo.id));
                }}
              >
                delete
              </button> */}
              <button onClick={() => onEditItemName(todo, index)}>
                {' '}
                {toEdit ? 'Cancel' : 'Edit'}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
