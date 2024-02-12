import "./App.css";
import BotCollection from "./Components/BotCollection";
import NavBar from "./Components/NavBar";
import YourBotArmy from "./Components/YourBotArmy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <BotCollection />
          </Route>
          <Route path="/bot-army">
            <YourBotArmy />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
