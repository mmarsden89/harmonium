import { searchAllRecipes } from "../api";
import React, { useEffect, useState } from "react";

const SearchReturn = (props) => {
  console.log("hey", props.match.params.query);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = searchAllRecipes(props.match.params.query);
    setRecipes(data);
  }, []);

  return <div></div>;
};

export default SearchReturn;
