import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode((prev) => !prev);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
