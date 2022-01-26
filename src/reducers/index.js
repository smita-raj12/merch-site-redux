import formVisibleReducer from './form-visible-reducer';
import merchandiseListReducer from './merchandise-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainMerchandiseList: merchandiseListReducer,
});

export default rootReducer;