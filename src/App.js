import React from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import { SharedBotProvider } from "./Components/SharedBotProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <SharedBotProvider>
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
    </SharedBotProvider>
  );
}

export default App;
