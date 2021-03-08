const fetchRecipes = async (props) => {
  const base_api =
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=";

  const api_key = "240b8446f07f478ca0cf156d30e46e05";
  const url = `${base_api}${api_key}`;

  const data = await (await fetch(url)).json();

  return data;
};

export default fetchRecipes;
