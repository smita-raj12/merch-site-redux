import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewMerchandiseForm(props){
      function handleNewMerchandiseFormSubmission(event) {
        event.preventDefault();
        props.onNewMerchandiseCreation({names: event.target.names.value, description: event.target.description.value, quantity:parseInt(event.target.quantity.value), price: parseInt(event.target.price.value), id: v4()});
      }
      
      return (
        <React.Fragment>
          <ReusableForm 
            formSubmissionHandler={handleNewMerchandiseFormSubmission}
            buttonText="Help!" />
        </React.Fragment>
      );
}

NewMerchandiseForm.propTypes = {
  onNewMerchandiseCreation: PropTypes.func
};

export default NewMerchandiseForm;