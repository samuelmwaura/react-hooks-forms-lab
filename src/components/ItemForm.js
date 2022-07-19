import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newItem,setNewItem]=useState({id:'',name:'',category:'Produce'})

  function OnInputChange(event){ // one function that handles all the onchange instances of all  the inputs.
    setNewItem((newItem)=>{     
      return {...newItem,id:uuid(),[event.target.name]:event.target.value} //The newItem is updates here and then passed as a parameter to the function handling onchange    
            
    })
  }
  return (
    <form className="NewItem"  onSubmit={(event)=>props.onItemFormSubmit(event,newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange={OnInputChange} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={OnInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
