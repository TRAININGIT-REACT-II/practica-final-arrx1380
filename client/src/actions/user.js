import types from "./types";

export const updateUserAction = (user) => ({
  type: types.UPDATE_USER,
  user,
});

export const clearUserAction = () => ({
  type: types.CLEAR_USER,
});
