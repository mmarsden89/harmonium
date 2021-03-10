const fetchRecipes = async (props) => {
  const base_api =
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=";

  const api_key = "240b8446f07f478ca0cf156d30e46e05";
  const url = `${base_api}${api_key}`;

  await fetch(url)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};

export default fetchRecipes;
