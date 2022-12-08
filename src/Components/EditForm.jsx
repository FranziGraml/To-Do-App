import React from 'react';
/* EditForm
- neue function anlegen 
- Form struktur anlegen (form/Input/label/ButtonUpdate ect.)


- form--> function... submit=event.prefentDefault
- input --> onChange: event.target.value

/* todos --> element
todos[element].name <-- event.target.value
1. todos in neues array speichern
2. Anhand index/id element suchen
3. element.name bearbeiten
4. setTodos neues array
 

EditButton
- EditButton anlegen in der List
- function für onClick vergeben

- useState für false or true (inputfield)
- useState für  Item.id (für jedes einzelne todo)
- useState für ItemName---- (das bereits geschriebenen todo soll im Input sichtbar werden)
- States übergeben (value...ect)
-
  /* 
status quo: 
- itemId: mit richtiger id des zu ändernden elements
- itemName: todolist bauen
- event.target.value: neuer itemName
- todos[{name: 'todolist bauen', id: xyz}]
*/

export default function EditForm({
  itemName,
  onFormSubmit,
  setChangedItemName,
}) {
  return (
    <>
      <form
        submit={event => {
          event.preventDefault();
          onFormSubmit();
        }}
      >
        <label>Update Todo</label>
        <input
          name="Update"
          type="text"
          defaultValue={itemName}
          onChange={event => {
            setChangedItemName(event.target.value);
          }}
        />
        <button type="submit" onClick={onFormSubmit}>
          Update
        </button>
      </form>
    </>
  );
}
