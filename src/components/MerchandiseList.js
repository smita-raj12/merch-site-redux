import React from "react";
import Merchandise from "./Merchandise";
import PropTypes from "prop-types";

function MerchandiseList(props) {
    return (
      <React.Fragment>
      <hr/>
      {Object.values(props.MerchandiseList).map((merchandise) =>
        <Merchandise
          whenMerchandiseClicked = { props.onMerchandiseSelection }
          names={merchandise.names}
          description={merchandise.description}
          quantity={merchandise.quantity}
          price={merchandise.price}
          formattedWaitTime={merchandise.formattedWaitTime}
          id={merchandise.id}
          key={merchandise.id}
          />
      )}
    </React.Fragment>
      );
  }

  MerchandiseList.propTypes = {
    MerchandiseList: PropTypes.object,
    onMerchandiseSelection: PropTypes.func
  };
export default MerchandiseList;