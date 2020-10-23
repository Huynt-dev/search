import React, { Component } from "react";
import "./css/style.css";
export default class Book extends Component {
  render() {
    return (
      <div className="box-book">
        <p>
          <b>Title:</b> {this.props.value.title}
        </p>
        <p>
          <b>Price:</b> {this.props.value.price}
        </p>
      </div>
    );
  }
}
