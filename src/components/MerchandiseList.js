import React from "react";
import Merchandise from "./Merchandise";
import PropTypes from "prop-types";

function MerchandiseList(props) {
    return (
      <React.Fragment>
      <hr/>
      {props.MerchandiseList.map((merchandise) =>
        <Merchandise
          whenMerchandiseClicked = { props.onMerchandiseSelection }
          name={merchandise.name}
        //   description={merchandise.description}
        //   quantity={merchandise.quantity}
        //   price={merchandise.price}
          id={merchandise.id}
          key={merchandise.id}
          />
      )}
    </React.Fragment>
      );
  }

  MerchandiseList.propTypes = {
    MerchandiseList: PropTypes.array,
    onMerchandiseSelection: PropTypes.func
  };
export default MerchandiseList;