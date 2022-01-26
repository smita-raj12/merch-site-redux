import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
    const { names, description, quantity, price, id } = action;
    
    switch (action.type) {
    case c.ADD_MERCH:
      return Object.assign({}, state, {
        [id]: {
            names: names,
            description: description,
            quantity: quantity,
            price: price,
            id: id
        }
    });
    
    case c.DELETE_MERCH:
        let newState = { ...state };
        delete newState[id];
        return newState;
    case c.INCREMENT: 
        let newState1 = {...state} 
        Object.values(newState1).map(q => {
            q.quantity ++
        })
        return  newState1;
    case c.DECREMENT: 
        let newState2 = {...state} 
        Object.values(newState2).map(q => {
            q.quantity --
        })
        return  newState2;    
    default:
        return state;
    }
};