import { searchAllRecipes } from "../api";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const SearchReturn = (props) => {
  console.log("hey", props.match.params.query);
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const data = await searchAllRecipes(props.match.params.query);
    setRecipes(data);
    console.log("heres the data0aosdkasd", data);
  }, []);

  const searchMap = recipes.map((recipe) => {
    <RecipeCard item={recipe} />;
  });

  return <div>{recipes && searchMap}</div>;
};

export default SearchReturn;
