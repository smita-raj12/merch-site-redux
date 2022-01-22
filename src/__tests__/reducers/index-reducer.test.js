import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import merchandiseListReducer from '../../reducers/merchandise-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainMerchandiseList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of merchandiseListReducer matches root reducer', () => {
    expect(store.getState().mainMerchandiseList).toEqual(merchandiseListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_MERCH action works for merchandiseListReducer and root reducer', () => {
    const action = {
        type: 'ADD_MERCH',
        name: 'laptop',
        description: 'contains lots of software',
        quantity: 4,
        price: "400",
        id: 1
      };
    store.dispatch(action);
    expect(store.getState().mainMerchandiseList).toEqual(merchandiseListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});