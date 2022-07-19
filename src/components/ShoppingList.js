import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCriteria,setSearchCriteria]=useState('');
  const [listItems,setListItems] = useState([...items])
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
      setSearchCriteria(()=>{
      return event.target.value})
  }

  function onItemFormSubmit(event,newItem){
    event.preventDefault();
    setListItems(()=>{      
      return  [...listItems,newItem]   //sets a new list that is later updated.
    });
    
  }
 
  const itemsToDisplay = listItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const itemsDislayedOnsearch=itemsToDisplay.filter(itemToDisplay=>{
    if(searchCriteria === '') return true;
     return itemToDisplay.name.includes(searchCriteria)
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchCriteria={searchCriteria}/>
      <ul className="Items">
        {itemsDislayedOnsearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
