import actionTypes from '../actions/Types';
import { Map } from 'immutable';

const init_state = Map({ count: 0 });

export default function(state=init_state, action) {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return state.set('count', state.get('count') + 1);
  }

  return state;
}