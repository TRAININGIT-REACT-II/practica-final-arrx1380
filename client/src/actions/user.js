import types from "./types";

export const updateUserAction = (user) => ({
  type: types.UPDATE_USER,
  user,
});
