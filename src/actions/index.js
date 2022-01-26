import * as c from './../actions/ActionTypes';

export const deleteMerch = id => ({
    type: c.DELETE_MERCH,
    id
  });
  export const toggleForm = () => ({
    type: c.TOGGLE_FORM
  });
  export const addMerch = (merch) => {
    const { names, description, quantity,price, id } = merch;
    return {
      type: c.ADD_MERCH,
      names: names,
      description: description,
      quantity: quantity,
      price: price,
      id: id
    }
  }
  export const decreseMerch = id => ({
    type: c.DECREMENT,
    id
  });
  export const increseMerch = id => ({
    type: c.INCREMENT,
    id
  });