import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
function App() {
  const [saveInput,setSaveInput] = useState("");
  const [items,setItem] = useState([]);
  function handleInput(event){
    const newValue=event.target.value;
    setSaveInput(newValue);
  }
  //add item function
  function addItems(){
    setItem((prevItem)=>{
      return [...prevItem,saveInput];
    })
    setSaveInput("");
  }
  //delete item function
  function deleteItem(id){
    setItem((prevItems)=>{
        return prevItems.filter((item,index)=>{
            return index !==id;
        });
    });
  }
  return (
    <div>
    <div className="container">
    <div className="heading"><h1>To-Do List</h1></div>
    <form className="form">
      <input type="text" placeholder="what you want to buy?" onChange={handleInput} value={saveInput}></input>
      <button type="button">
        <span onClick={addItems}>Add</span>
      </button>
    </form>
      <ul>
        {items.map((toDoItem,index)=>{
            return <ToDoList 
              id = {index}
              key = {index}
              text = {toDoItem}
              onChecked = {deleteItem}
            />
        })}
      </ul>
      </div>
    </div>
    )
}

export default App;