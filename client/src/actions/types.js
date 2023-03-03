const actions = [
  // User
  "UPDATE_USER",
  "CLEAR_USER",

  // Notes
  "CREATE_NOTE",
  "UPDATE_NOTE",
  "DELETE_NOTE",
  "CLEAR_NOTES",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach((action) => {
  actionTypes[action] = action;
});

export default actionTypes;
