const axios = require("axios");

const fetchRecipes = async (props) => {
  const base_api =
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=";

  const api_key = "240b8446f07f478ca0cf156d30e46e05";
  const url = `${base_api}${api_key}`;

  const apiData = await axios(url);

  return apiData.data.recipes;
};

export default fetchRecipes;
