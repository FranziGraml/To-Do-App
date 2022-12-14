import React from 'react';
/* (1.)EditForm
- neue function anlegen 
- Form struktur anlegen (form/Input/label/ButtonUpdate ect.)

(3/4)
- form--> function... onSubmit=event.prefentDefault vergeben
- input --> onChange: event.target.value vergeben
- buttonUpdate --> onClick vergeben

(2.)EditButton
- EditButton anlegen in der Listmap.jsx
- function für onClick vergeben

function editItemName und useStates App.jsx
- useState für false or true (inputfield) ->in der console überprüfen
- useState für  Item.id (für jedes einzelne todo) -> in der Console überprüfen
- useState für ItemName---- (das bereits geschriebenen todo soll im Input sichtbar werden) ->in der console überprüfen
- States übergeben (value, onCklick;...ect)

status quo: 
- itemId: mit richtiger id des zu ändernden elements
- itemName: todolist bauen
- event.target.value: neuer itemName
- todos[{name: 'todolist bauen', id: xyz}]


(4.)EditForm
fuction FormSubmit App.jsx
 todos --> element
todos[element].name <-- event.target.value
1. todos in neues array speichern
2. Anhand index/id element suchen
3. element.name bearbeiten
4. setTodos neues array
5. props übergeben
 */

export default function EditForm({
  itemName,
  onFormSubmit,
  setChangedItemName,
}) {
  return (
    <>
      <form
        onSubmit={event => {
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
