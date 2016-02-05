import React from 'react';

import { createStore, combineReducers } from 'Redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);
// const initialState = store.getState();

import Counter from 'components/Counter';

export default class App extends React.Component {
  render() {
    const countState = store.getState().Counter.get(0);

    return (
      <Provider store={store}>
        <Counter count={ countState } />
      </Provider>
    );
  }
}
