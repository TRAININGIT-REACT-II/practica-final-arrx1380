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
    // TODO
    localStorage.setItem("logged", false);
    userContext.update(false);
    history.push("/login");
  }, []);

  return <></>;
};

export default Logout;
