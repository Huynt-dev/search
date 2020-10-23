import React, { Component } from "react";
import Book from "./Book";
import "./css/style.css";

const data = [
  { title: "book", price: 123 },
  { title: "book2", price: 111 },
  { title: "abc3", price: 541 },
  { title: "asdas", price: 423 },
  { title: "asdd", price: 1211 },
  { title: "book3", price: 541 },
  { title: "book", price: 5623 },
  { title: "book2", price: 121 },
  { title: "book3", price: 541 },
  { title: "book", price: 122 },
  { title: "bok2", price: 141 },
  { title: "bok3", price: 241 }
];

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    };
  }

  componentDidMount() {
    console.log("vao day 2");
    this.setState({ searchData: data });
  }

  handleChange = (e) => {
    const text = e.target.value;
    const filtered = data.filter((x) => x.title.includes(text));

    this.setState({ searchData: filtered });
  };

  render() {
    const { searchData } = this.state;
    console.log("vao day 1");
    return (
      <div className="box-content">
        <input
          className="search-book"
          placeholder="Tìm sách..."
          type="text"
          onChange={this.handleChange}
        />
        <div className="box">
          {searchData.map((x, index) => (
            <Book value={x} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
