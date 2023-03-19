import React, { useState } from "react";
import  ToDoList  from './to-do-list';
import AddItem from './AddItem';



function ToDoAdd() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <div>
      <AddItem handleClick={handleClick} />
      <ToDoList buttonClicked={buttonClicked} />
    </div>
  );
}

/**function AddItem(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Click me to trigger ToDoList's button</button>
    </div>
  );
}

function ToDoList(props) {
  return (
    <div>
      {props.buttonClicked ? (
        <button>Button in ToDoList is triggered!</button>
      ) : (
        <button disabled>Button in ToDoList is not yet triggered</button>
      )}
    </div>
  );
}**/

export default ToDoAdd;
