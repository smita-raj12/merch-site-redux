import React from "react";
import PropTypes from "prop-types";

function Merchandise(props){
  return (
    <React.Fragment>
        <div onClick = {() => props.whenMerchandiseClicked(props.id)}>
        <p>{props.names}</p>  
        <p>{props.description}</p>
        <p>{props.quantity}</p>
        <p>{props.price}</p>
        <p>{props.error}</p>
        <hr/>
        </div>
    </React.Fragment>
  );
}

Merchandise.propTypes = {
    names: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number, 
    whenMerchandiseClicked: PropTypes.func 
};

export default Merchandise;