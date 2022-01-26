import * as actions from './../../actions';
import * as c from './../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteMerch should create DELETE_MERCH action', () => {
    expect(actions.deleteMerch(1)).toEqual({
      type: c.DELETE_MERCH,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addMerch should create ADD_MERCH action', () => {
    expect(actions.addMerch({names: 'laptop', description: 'device', quantity: 5, price: 30, id: 1})).toEqual({
      type: c.ADD_MERCH,
      names: 'laptop',
      description: 'device',
      quantity: 5,
      price: 30,
      id: 1
    });
  });
});