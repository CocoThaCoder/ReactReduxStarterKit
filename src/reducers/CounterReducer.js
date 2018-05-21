import update from 'immutability-helper';

import actionTypes from '../actions/Types';

const initialState = { count: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return update(state, {
        count: { $set: state.count + 1 },
      });
    default:
      return state;
  }
}
