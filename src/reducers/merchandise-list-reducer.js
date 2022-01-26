

export default (state = {}, action) => {
    const { names, description, quantity, price, id } = action;
    
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
        console.log(newState[id])
        delete newState[id];
        return newState;
    case 'INCREMENT': 
    
        let newState1 = {...state} 
        console.log(newState1); 
        let quan = {}
        Object.values(newState1).map(q => {
            console.log(q.quantity)
            quan = q.quantity ++
        })
        
        console.log(newState1[id]);  
        return  newState1;
        case 'DECREMENT': 
    
        let newState2 = {...state} 
        console.log(newState2); 
        let quan1 = {}
        Object.values(newState2).map(q => {
            console.log(q.quantity)
            quan1 = q.quantity --
        })
        
        console.log(newState2[id]);  
        return  newState2;    
    default:
        return state;
    }
};