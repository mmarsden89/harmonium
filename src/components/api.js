const axios = require("axios");

const api_key = "apiKey=97911ab2b1404bcebf0bf52bfbe964b1";

const fetchRecipes = async (context, diet) => {
  const base_url = "https://api.spoonacular.com/recipes/";

  const contextMap = {
    random: "random?instructionsRequired=true",
    complexSearch: `complexSearch?&diet=${diet}&addRecipeInformation=true`,
  };

  const url = `${base_url}${contextMap[context]}&number=6&${api_key}`;

  const apiData = await axios(url);

  return apiData.data.recipes || apiData.data.results;
};

const searchRecipes = async (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&${api_key}&number=10&instructionsRequired=true&addRecipeInformation=true`;

  const apiData = await axios(url);
  console.log("search results===>", apiData.data.results);
  return apiData.data.results;
};

const getSimilarRecipes = async (id) => {
  let returnedData = [];
  const url = `https://api.spoonacular.com/recipes/${id}/similar?${api_key}&number=6`;

  const apiData = await axios(url);

  for (let i = 0; i < apiData.data.length; i++) {
    const individualUrl = `https://api.spoonacular.com/recipes/${apiData.data[i].id}/information?${api_key}&instructionsRequired=true`;
    const similarData = await axios(individualUrl);
    returnedData.push(similarData.data);
  }

  returnedData = returnedData
    .filter((data) => {
      return data.analyzedInstructions !== null;
    })
    .slice(0, 3);

  console.log("returned", returnedData);
  return returnedData;
};

const searchAllRecipes = async (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&${api_key}&number=100`;

  const apiData = await axios(url);

  return apiData.data.results;
};

export { fetchRecipes, searchRecipes, getSimilarRecipes, searchAllRecipes };
