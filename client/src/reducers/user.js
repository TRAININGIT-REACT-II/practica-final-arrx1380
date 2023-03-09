import types from "../actions/types";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      localStorage.setItem("user", JSON.stringify(action.user));
      return action;
    case types.CLEAR_USER:
      localStorage.removeItem("user");
      return initialState;
    default:
      return state;
  }
};

export default reducer;
