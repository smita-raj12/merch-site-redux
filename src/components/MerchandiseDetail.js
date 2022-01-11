import React from "react";
import PropTypes from "prop-types";

function MerchandiseDetail(props){
  const { merchandise, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Merchandise Detail</h1>
      <p>{merchandise.name}</p> 
      <p>{merchandise.description}</p>
      <p>{merchandise.quantity}</p>
      <p>{merchandise.price}</p>
      <button onClick={ props.onClickingBuy }>Buy</button>
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
  onClickingBuy: PropTypes.func
};

export default MerchandiseDetail;