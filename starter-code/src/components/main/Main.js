import React, { Component } from 'react';
import './main.css';
import ProductTable from '../producttable/ProductTable'
import SearchBar from '../searchbar/SearchBar'



class Main extends Component {
  constructor(props){
    super(props)
    this.state= {
      searchTermState: '',
      allTheProducts: this.props.products,
      visibleProducts: this.props.products,
      checkBoxValue: false,

    }
  }
  // function datafromchild(data){
  //   let jhhjkds = data
  // }
  dataFromChild = (data) => {
    // console.log(data);
    let searchTerm = data;

    let clone = [...this.state.allTheProducts]
    // console.log("*****CLONE*****",clone)
    let filteredList = clone.filter((eachproduct)=>{
      return eachproduct.name.toUpperCase().includes(searchTerm.toUpperCase())
    })


    this.setState({visibleProducts: filteredList, searchTermState: searchTerm })
  }

  checkBox = (blah) => {
    let checkedData = blah //this is e i don't think i need this
    let clone = [...this.state.allTheProducts] //Cloning current state
    if(this.state.checkBoxValue){
      let filteredList = clone.filter((eachproduct)=>{
        return eachproduct.name.toUpperCase().includes(searchTerm.toUpperCase())
      })
     this.setState({checkBoxValue:false, visibleProducts: filteredList})
    }
    else{
      let filteredList = clone.filter((eachproduct)=>{
        return clone.stocked; //this is what Ashley
      })
     this.setState({checkBoxValue:true, visibleProducts: filteredList})
    }

  }


  render() {
    // console.log("********",this.state.allTheProducts);
    // console.log("--------",this.state.visibleProducts);
    return (
      <div className="main">
        Hello I am Main Component 
        <h1>IronStore</h1>
        <SearchBar products1 = { this.state.allTheProducts} dataFromChild = {this.dataFromChild} checkBox = {this.checkBox}/>
        <ProductTable products2 = { this.state.visibleProducts }/>

      </div>
    );
  }
}

export default Main;
