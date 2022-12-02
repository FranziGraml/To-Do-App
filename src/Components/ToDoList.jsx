import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function List({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.name}
              {/* <input
                type="checkbox"
                  checked={todo.isChecked}
                onChange={event => {
                  setTodos(
                    todos.map(
                      todo_ => todo_.id === todo.id
                      ? { ...todo_, isChecked: event.target.checked }
                          : todo_
                    )
                  );
                }}
              /> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
