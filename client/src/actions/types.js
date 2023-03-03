const actions = [
  // User
  "UPDATE_USER",
  "CLEAR_USER",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach((action) => {
  actionTypes[action] = action;
});

export default actionTypes;
