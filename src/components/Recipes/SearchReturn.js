import { searchAllRecipes } from "../api";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import dummysearch from "../../dummysearch.json";

const SearchReturn = (props) => {
  console.log("hey", props.match.params.query);
  const [recipes, setRecipes] = useState([]);
  const [number, setNumber] = useState(10);

  useEffect(async () => {
    // const data = await searchAllRecipes(props.match.params.query);
    // setRecipes(data);
    setRecipes(dummysearch);
  }, [number]);

  const searchMap = recipes
    .slice(0, number)
    .map((recipe) => <RecipeCard item={recipe} size={3} />);

  const incriment = () => {
    setNumber(number + 10);
  };

  return (
    <div style={{ width: "80vw", margin: "25px auto" }}>
      {recipes && searchMap}
      <button onClick={incriment}></button>
    </div>
  );
};

export default SearchReturn;
