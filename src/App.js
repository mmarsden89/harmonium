import "./App.scss";
import { Navbar, Recipe } from "./components/index";
import { Switch, Route } from "react-router-dom";
import RecipeById from "./components/Recipes/RecipeById.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recipe} />
        <Route exact path="/recipes/:id" component={RecipeById} />
      </Switch>
    </div>
  );
}

export default App;
