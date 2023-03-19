import React from "react";
import './App.css';
import ToDoAdd from "./components/ToDo-Add-(combined)";
import CloseItem from './components/CloseItem';
import CheckItem from './components/CheckItem';


function App() {
  return (
    <div>
      <ToDoAdd />
      <CloseItem/>
      <CheckItem/>
    </div>
  );
}


export default App;


