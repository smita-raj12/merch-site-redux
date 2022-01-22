import React from "react";
import PropTypes from "prop-types";

function MerchandiseDetail(props){
  const { merchandise, onClickingDelete } = props; 
  
  function getQuantityText(quantity) {
    if (quantity <= 0) {
      return "Out of stock!";
    }
    else {
      return quantity;
    }
  }
  
  return (
    <React.Fragment>
      <h1>Merchandise Detail</h1>
      <p>{merchandise.names}</p> 
      <p>{merchandise.description}</p>
      <p>{getQuantityText(merchandise.quantity)}</p>
      <p>{merchandise.price}</p>
      <button disabled={merchandise.quantity <= 0 ? true : false} onClick={ props.onClickingBuy }>Buy</button>
      <button onClick={ props.onClickingReStock }>ReStock</button>
      <button onClick={()=> onClickingDelete(merchandise.id) }>Close Merchandise</button> 
      <button onClick={ props.onClickingEdit }>Update Merchandise</button>
      <hr/>
    </React.Fragment>
  );
}

MerchandiseDetail.propTypes = {
  merchandise: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  error:PropTypes.string
};

export default MerchandiseDetail;