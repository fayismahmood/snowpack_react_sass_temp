import React, { Component } from "react";
import { render } from "react-dom";
import Cont from "./comps/Cont";
import Header from "./comps/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Cont></Cont>
      </div>
    );
  }
}
render(<App />, document.querySelector("#root"));
