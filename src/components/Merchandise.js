import React from "react";
import PropTypes from "prop-types";

function Merchandise(props){
  return (
    <React.Fragment>
        <div onClick = {() => props.whenMerchandiseClicked(props.id)}>
        <p>{props.name}</p>  
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    price: PropTypes.string, 
    whenMerchandiseClicked: PropTypes.func 
};

export default Merchandise;