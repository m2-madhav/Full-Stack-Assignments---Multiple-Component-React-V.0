import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">What's Your Loction</h1>
        <p data-ns-test="project-description">
          In this we have a group in which all friend's location is there
        </p>
      </>
    );
  }
}

export default App;
