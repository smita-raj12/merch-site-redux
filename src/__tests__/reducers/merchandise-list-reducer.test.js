import merchandiseListReducer from '../../reducers/merchandise-list-reducer';

describe('merchandiseListReducer', () => {

  let action;
  const merchandiseData = {
    name: 'laptop',
    description: 'windows',
    quantity: 4,
    price: 20,
    id: 1
  };
  const merchandiseData1 = {
    quantity: 4,
  };
  const currentState = {
    1: { 
      name: 'laptop',
      description: 'windows',
      quantity: 4,
      price: 20,
      id: 1 
    },
    2: { 
      name: 'piyano',
      description: 'more sounds',
      quantity: 5,
      price: 50,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchandiseListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merchandise data to mainMerchandiseList', () => {
    const { name, description, quantity, price, id } = merchandiseData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      id: id
    };

    expect(merchandiseListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        id: id
      }
    });
  });
  
  test('Should successfully delete a merchandise', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };
    expect(merchandiseListReducer(currentState, action)).toEqual({
      2: {
        name: 'piyano',
        description: 'more sounds',
        quantity: 5,
        price: 50,
        id: 2
      }
    });
  });
  test('Should successfully increase merchandise quantity to mainMerchandiseList', () => {
    
    action = {
      type: 'INCREMENT_MERCH',
    };

    expect(merchandiseListReducer(merchandiseData1, action)).toEqual({
        quantity: 5
    });
  });
  test('Should successfully decrese merchandise quantity to mainMerchandiseList', () => {
    
    action = {
      type: 'DECREMENT_MERCH',
    };

    expect(merchandiseListReducer(merchandiseData1, action)).toEqual({
        quantity: 3
    });
  });
});