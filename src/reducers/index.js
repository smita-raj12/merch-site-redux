import formVisibleReducer from './form-visible-reducer';
import merchandiseListReducer from './merchandise-list-reducer';
import { combineReducers } from 'redux';
//import quantityIncreDecreReducer from './merchandise-incre-decre-reduser';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainMerchandiseList: merchandiseListReducer,
  //quantity: quantityIncreDecreReducer
});

export default rootReducer;