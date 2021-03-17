const axios = require("axios");

const fetchRecipes = async (context, diet) => {
  const base_url = "https://api.spoonacular.com/recipes/";

  const contextMap = {
    random: "random?instructionsRequired=true",
    complexSearch: `complexSearch?&diet=${diet}&addRecipeInformation=true`,
  };

  const api_key = "&apiKey=240b8446f07f478ca0cf156d30e46e05";

  const url = `${base_url}${contextMap[context]}&number=20${api_key}`;
  console.log("--->", url);

  const apiData = await axios(url);

  console.log("data---->", apiData.data.recipes);

  return apiData.data.recipes || apiData.data.results;
};

export default fetchRecipes;
