import { useContext } from "react";
import UserContext from "../contexts/user";
import { useHistory } from "react-router";

const Logout = () => {
  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // TODO
  userContext.update(false);
  localStorage.setItem("logged", false);
  history.push("/login");

  return <></>;
};

export default Logout;
