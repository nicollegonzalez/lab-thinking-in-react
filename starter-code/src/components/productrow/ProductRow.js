import React, { Component } from 'react';
import './productrow.css';




class ProductRow extends Component {
  
  render() {
    // console.table(this.props.stocked);
    return (
      <div className="product-row">
        <span
         className={!this.props.stocked ? 'out-of-stock' : ''} 
        >{this.props.name}</span>
        <span
         className={!this.props.stocked ? 'out-of-stock' : ''}
        >{this.props.price}</span>
      </div>
    );
  }
}

export default ProductRow;
