import "./App.scss";
import { Navbar, Recipe, SearchReturn } from "./components/index";
import { Switch, Route } from "react-router-dom";
import RecipeById from "./components/Recipes/RecipeById.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recipe} />
        <Route exact path="/recipes/:id" component={RecipeById} />
        <Route exact path="/search/:query" component={SearchReturn} />
      </Switch>
    </div>
  );
}

export default App;
