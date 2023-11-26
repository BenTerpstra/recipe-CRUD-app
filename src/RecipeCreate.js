import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  
  const blankRecipe = {name: "", cuisine: "", photo: "", ingredients: "", preparation: ""};
  const [recipeData, setRecipeData] = useState({...blankRecipe});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, recipeData]);
    setRecipeData({...blankRecipe});
  }
  
  const handleChange = ({target}) => {
    setRecipeData({...recipeData, [target.name]: target.value});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" type="text" placeholder="Name" onChange={handleChange} value={recipeData.name}/></td>
            <td><input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={recipeData.cuisine}/></td>
            <td><input id="photo" name="photo" type="url" placeholder="URL" onChange={handleChange} value={recipeData.photo}/></td>
            <td><textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleChange} value={recipeData.ingredients}/></td>
            <td><textarea id="preparation" name="preparation" placeholder="Preparation" onChange={handleChange} value={recipeData.preparation}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
