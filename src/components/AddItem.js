// Create a new list item when clicking on the "Add" button
import React, { useRef, useState, useEffect } from 'react';

function AddItem() {
  const [inputValue, setInputValue] = useState('');
  const myInputRef = useRef(null);
  const myULRef = useRef(null);

  useEffect(() => {
    const closeButtons = myULRef.current.querySelectorAll('.close');
    closeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.parentElement.style.display = 'none';
      });
    });
  }, [myULRef]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '') {
      console.error('You must write something!');
    } else {
      const li = React.createElement('li', null, inputValue);
      const span = React.createElement(
        'span',
        { className: 'close' },
        '\u00D7'
      );
      li.appendChild(span);
      myULRef.current.appendChild(li);
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="myInput"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
          ref={myInputRef}
        />
        <button type="submit">Add</button>
      </form>
      <ul id="myUL" ref={myULRef}></ul>
    </div>
  );
}
export default AddItem;