import React from 'react';

export default function ButtonDelete({ id, todos, setTodos }) {
  /* function deleteButton() {
    setTodos(todos.filter(todo => todo.id !== id));
  } */

  return (
    <button
      type="button"
      onClick={() => setTodos(todos.filter(todo => todo.id !== id))}
    >
      Delete
    </button>
  );
}

/* 
return (
  <ButtonDelete type="button" onClick={() => deleteButton()}>
    Delete
  </ButtonDelete>
); 
}*/
