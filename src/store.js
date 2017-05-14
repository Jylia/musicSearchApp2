import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers/mainReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    mainReducer,
    composeEnhancers(...enhancers)
  );

  return store;
};