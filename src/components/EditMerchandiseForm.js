import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchandiseForm(props){
    const { merchandise } = props;
  
    function handleEditMerchandiseFormSubmission(event) {
        event.preventDefault();
        props.onEditMerchandise({names: event.target.names.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value,id: merchandise.id});
}

return (
    <React.Fragment>
        <ReusableForm 
            formSubmissionHandler={handleEditMerchandiseFormSubmission} 
            buttonText="Update Merchandise" />
        </React.Fragment>
    );
}

EditMerchandiseForm.propTypes = {
    merchandise: PropTypes.object,
    onEditMerchandise: PropTypes.func
  };
export default EditMerchandiseForm;