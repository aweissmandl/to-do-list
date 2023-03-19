import React, { useState } from 'react';

// Add a "checked" symbol when clicking on a list item

function CheckItem() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'object.props' },
    { id: 2, text: 'object.props' },
    { id: 3, text: 'object.props' },
  ]);

  const handleToggle = (ev) => {
    if (ev.target.tagName === 'LI') {
      const id = parseInt(ev.target.id);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul onClick={handleToggle}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={todo.id}
            className={todo.checked ? 'checked' : ''}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckItem;
