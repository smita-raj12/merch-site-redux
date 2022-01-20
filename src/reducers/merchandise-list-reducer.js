export default (state = {}, action) => {
    const { name, description, quantity, price, id } = action;
    switch (action.type) {
    case 'ADD_MERCH':
      return Object.assign({}, state, {
        [id]: {
            name: name,
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
    case 'INCREMENT_MERCH':    
        let newState1 = { ...state};
        newState1.quantity ++;
        return newState1;
    case 'DECREMENT_MERCH':    
        let newState2 = { ...state};
        newState2.quantity --;
        return newState2;    
    default:
        return state;
    }
};