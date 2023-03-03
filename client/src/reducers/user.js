import types from "../actions/types";

const initialState = { name: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        name: action.name,
      };
    case types.CLEAR_USER:
      return {
        name: [],
      };
    default:
      return state;
  }
};

export default reducer;
