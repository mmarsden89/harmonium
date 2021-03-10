import fetchRecipes from "./api";
import React, { useEffect, useState } from "react";

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recipesFetch = fetchRecipes();
    setRecipes(recipesFetch);
  }, []);

  console.log("hello", recipes);
  const recipeMap = recipes.map((item) => <div>hi</div>);

  return <div>{recipeMap}</div>;
};

export default Recipe;
