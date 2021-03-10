import fetchRecipes from "./api";
import React, { useEffect, useState } from "react";

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const recipesFetch = await fetchRecipes();
    setRecipes(recipesFetch);
  }, []);

  const recipeMap = recipes.map((item) => <div>hi</div>);

  return <div>{recipeMap}</div>;
};

export default Recipe;
