import "./App.scss";
import { Navbar, Recipe } from "./components/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Recipe} />
      </Switch>
    </div>
  );
}

export default App;
