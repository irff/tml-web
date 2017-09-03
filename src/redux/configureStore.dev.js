import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import * as api from '@/services/api';
import history from '../common/routing';
import rootReducer from '../redux_modules';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api), logger)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../redux_modules', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../redux_modules').default)
    );
  }

  return store;
}
