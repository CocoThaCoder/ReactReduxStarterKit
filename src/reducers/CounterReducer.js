import actionTypes from '../actions/Types';

const init_state = { count: 0 };

export default function(state=init_state, action) {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return { count: state.count + 1 }
  }

  return state;
}