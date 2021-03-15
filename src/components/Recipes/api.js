const axios = require("axios");

const fetchRecipes = async (props) => {
  const { diet } = props;
  const base_api =
    "https://api.spoonacular.com/recipes/random?number=20&instructionsRequired=true";

  const api_key = "&apiKey=240b8446f07f478ca0cf156d30e46e05";
  const dietQuery = `&diet=${diet}`;

  const url = `${base_api}${dietQuery}${api_key}`;

  const apiData = await axios(url);

  return apiData.data.recipes;
};

export default fetchRecipes;
