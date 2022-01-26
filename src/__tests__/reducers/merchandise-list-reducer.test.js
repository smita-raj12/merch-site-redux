import merchandiseListReducer from '../../reducers/merchandise-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('merchandiseListReducer', () => {

  let action;
  const merchandiseData = {
    names: 'laptop',
    description: 'windows',
    quantity: 4,
    price: '20',
    id: 1
  };
  const merchandiseData1 = {
    quantity: 4,
  };
  const currentState = {
    1: { 
      names: 'laptop',
      description: 'windows',
      quantity: 4,
      price: '20',
      id: 1 
    },
    2: { 
      names: 'piyano',
      description: 'more sounds',
      quantity: 5,
      price: '50',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchandiseListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merchandise data to mainMerchandiseList', () => {
    const { names, description, quantity, price, id } = merchandiseData;
    action = {
      type: c.ADD_MERCH,
      names: names,
      description: description,
      quantity: quantity,
      price: price,
      id: id
    };

    expect(merchandiseListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        description: description,
        quantity: quantity,
        price: price,
        id: id
      }
    });
  });
  
  test('Should successfully delete a merchandise', () => {
    action = {
      type: c.DELETE_MERCH,
      id: 1
    };
    expect(merchandiseListReducer(currentState, action)).toEqual({
      2: {
        names: 'piyano',
        description: 'more sounds',
        quantity: 5,
        price: '50',
        id: 2
      }
    });
  });
  test('Should successfully increase merchandise quantity to mainMerchandiseList', () => {
    
    action = {
      type: c.INCREMENT,
      id: 1
    };

    expect(merchandiseListReducer(merchandiseData1, action)).toEqual({
        quantity: 5
    });
  });
  test('Should successfully decrese merchandise quantity to mainMerchandiseList', () => {
    
    action = {
      type: c.DECREMENT,
      id: 1
    };

    expect(merchandiseListReducer(merchandiseData1, action)).toEqual({
        quantity: 3
    });
  });
});