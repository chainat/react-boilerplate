import {
  SAMPLE_LOADED,
} from '../consts/actions';

const randomUserReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SAMPLE_LOADED:
      // Only return users (sub element only) because we are using combineReducer
      newState = action.payload.users;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default randomUserReducer;
