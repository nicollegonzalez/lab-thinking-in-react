import React, { Component } from 'react';
import './producttable.css';
import ProductRow from '../productrow/ProductRow';


//
class ProductTable extends Component {



  showRows = () => {
    return(
      this.props.products2.map((eachProduct, i)=>{
        return(
          <ProductRow
           key={i}
            name={eachProduct.name}
             price={eachProduct.price}
             stocked={eachProduct.stocked}
          />
        )
      })
    )
  }


  render() {
    // console.log(this.props.products2);
    
    return (
      <div className="product-table">
        <div className="table-header"> 
          <span>Name</span><span>Price</span>
        </div>
        
        {this.showRows()}
      </div>
    );
  }
}

export default ProductTable;
