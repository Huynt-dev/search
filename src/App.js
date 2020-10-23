import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
      </div>
    );
  }
}
