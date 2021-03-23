const axios = require("axios");

const api_key = "&apiKey=240b8446f07f478ca0cf156d30e46e05";

const fetchRecipes = async (context, diet) => {
  const base_url = "https://api.spoonacular.com/recipes/";

  const contextMap = {
    random: "random?instructionsRequired=true",
    complexSearch: `complexSearch?&diet=${diet}&addRecipeInformation=true`,
  };

  const url = `${base_url}${contextMap[context]}&number=20${api_key}`;

  const apiData = await axios(url);

  return apiData.data.recipes || apiData.data.results;
};

const searchRecipes = async (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&${api_key}`;

  const apiData = await axios(url);

  return apiData.data.results;
};

export { fetchRecipes, searchRecipes };
