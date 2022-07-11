import React from "react";
function ToDoList(props){
   
    return <div>
    <li onClick={()=>{
        props.onChecked(props.id)
    }}>{props.text}</li>
    </div>
}
export default ToDoList;