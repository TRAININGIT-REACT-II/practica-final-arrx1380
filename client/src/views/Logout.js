import { useContext, useEffect } from "react";
import UserContext from "../contexts/user";
import { useHistory } from "react-router";

const Logout = () => {
  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // Effects
  useEffect(() => {
    localStorage.removeItem("user");
    userContext.update(null);
    history.push("/login");
  });

  return <></>;
};

export default Logout;
