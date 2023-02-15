import { useState } from 'react';
import React from 'react';
import './App.css'; 



function App() {
  const [newItem,setNewItem]=useState("");
  const [items,setItems]=useState([]);
  
  function AddItem(){
    if(!newItem){
      alert("add a new task")
      return;
    }
  const item = {
    id: Math.floor(Math.random()*1000) ,
    value : newItem
  }
  setItems(oL=>[...oL,item]);
  console.log(item)
  setNewItem("");
  }

  function DeleteItem(id){
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
    return (
      <div className="App">
        <h1>To Do List</h1>

        <input
          type="text"
          placeholder='New task...'
          value={newItem}
          onChange={e=>setNewItem(e.target.value)}
        />
        <button onClick={AddItem}>Add</button>
        <ul>
          {items.map(item=>  
          <div className="list-item">
            <li key={item.id}>
              {item.value}
            </li>
            <button onClick={()=>DeleteItem(item.id)}>X</button>
          </div>
            
          )}
        </ul>

      </div>
    );
} 

export default App;
