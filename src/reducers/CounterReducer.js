import actionTypes from '../actions/Types';
import { Map } from 'immutable';

const initialState = Map({ count: 0 });

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state.set('count', state.get('count') + 1);
    default:
      return state;
  }
}
