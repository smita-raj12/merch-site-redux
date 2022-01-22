import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='names' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type="number"
          defaultValue={5}
          name='quantity'
          placeholder='Quantity' />
        <input
          type='number'
          defaultValue={10}
          name='price'
          placeholder='Price' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;