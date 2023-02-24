import { createContext } from "react";

const User = createContext({
  logged: true,
  update: () => {},
});

export default User;
