import React, { Component } from 'react';
import './searchbar.css';




class SearchBar extends Component {
  

  search = (e) => {
    let searchTerm = e.target.value;
    // console.log(searchTerm);

    this.props.dataFromChild(searchTerm);
  }

  inStock = (e) => {
    // console.log(e.target.value)
    this.props.checkBox(e.target.value);

  }






  render() {
    // console.log(this.props.products);
    return (
      <div className="search-bar">
        <input 
        className="search form"
         placeholder="Enter a Search Term"
          onChange={this.search}
        />
        <div>
          <input type="checkbox" onClick={this.inStock}></input>
          <label>Only show items in stock</label>
        </div>
        
      </div>
    );
  }
}

export default SearchBar;
