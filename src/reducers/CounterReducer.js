import Immutable from 'immutable';

const defaultState = new Immutable.List([0]);

export default function countReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.set(0, state.get(0) + 1);
    case 'DECREMENT':
      return state.set(0, state.get(0) - 1);
    default:
      return state;
  }
}
