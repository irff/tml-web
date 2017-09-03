import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import * as api from '@/services/api';
import history from '../common/routing';
import rootReducer from '../redux_modules';

const enhancer = applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
