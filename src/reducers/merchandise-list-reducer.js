export default (state = {}, action) => {
    const { names, description, quantity, price, id } = action;
    
    // let initialState={
    //     quantity: state.quantity
    // }
    switch (action.type) {
    case 'ADD_MERCH':
      return Object.assign({}, state, {
        [id]: {
            names: names,
            description: description,
            quantity: quantity,
            price: price,
            id: id
        }
    });
    case 'DELETE_MERCH':
        let newState = { ...state };
        delete newState[id];
        return newState;
    case 'INCREMENT': 
    return Object.assign({}, state, {
            quantity: state[quantity] ++,
    });
    default:
        return state;
    }
};