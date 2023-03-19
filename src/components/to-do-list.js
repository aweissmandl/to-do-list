import React from 'react';
import './to-do.css';


function GetAddItem(props) {
  return (
    <div>
      <props.AddItem />
    </div>
  );
};


function ToDoList(props) {
  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span onClick={props.AddItem} className="addBtn">
        Add
      </span>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </div>
  );
}




export default ToDoList;



