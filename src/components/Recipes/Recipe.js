import { fetchRecipes } from "../api";
import React, { useEffect, useState } from "react";
import RecipeSearch from "./RecipeSearch";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import { titleShortener } from "../../utils.js";
import "./Recipe.scss";

import { Link } from "react-router-dom";

import dummy from "../../dummy.json";

import RecipeCard from "./RecipeCard";

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState("");
  const [queryParams, setQueryParams] = useState([]);
  const [context, setContext] = useState("random");
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    // const recipesFetch = await fetchRecipes(context, diet);
    // setRecipes(recipesFetch);
    // console.log("recipe---s>>>", recipesFetch);
    console.log("dummy--->", dummy);
    setRecipes(dummy);
    setLoading(false);
  }, [diet, queryParams]);

  const recipeMap = recipes.map((item) => (
    <RecipeCard
      id={item.id}
      title={item.title}
      image={item.image}
      item={item}
    />
  ));

  return (
    <div className="recipe-container">
      <RecipeSearch />
      {!loading && recipeMap}
    </div>
  );
};

export default Recipe;
