import React, { Component } from "react";

import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/drink" render={() => <Drink />} />
          <Route exact path="/eat" render={() => <Eat />} />
          <Route exact path="/" render={() => <Home />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
