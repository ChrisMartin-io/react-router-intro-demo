import React, { Component } from "react";

import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }

  goToPage(page) {
    this.setState({ page: page });
  }

  showRightPage() {
    if (this.state.page === "home") return <Home />;
    else if (this.state.page === "eat") return <Eat />;
    else if (this.state.page === "drink") return <Drink />;
  }

  render() {
    return (
      <main>
        <nav>
          <a onClick={() => this.goToPage("drink")}>Drink</a>
          <a onClick={() => this.goToPage("eat")}>Eat</a>
          <a onClick={() => this.goToPage("home")}>Home</a>
        </nav>
        {this.showRightPage()}
      </main>
    );
  }
}

// end

export default App;
