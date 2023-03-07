import types from "../actions/types";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return action;
    case types.CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
