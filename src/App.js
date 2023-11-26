import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const headerStyles = {
    fontFamily: "'Playfair Display SC'",
    fontSize: "64px",
    textAlign: "center"
  }
  
  return (
    <div className="App">
      <header><h1 style={{...headerStyles}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
