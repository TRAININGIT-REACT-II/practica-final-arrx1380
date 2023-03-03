import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserAction } from "../actions/user";
import { clearNotesAction } from "../actions/note";
import UserContext from "../contexts/user";
import { useHistory } from "react-router";

const Logout = () => {
  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Effects
  useEffect(() => {
    dispatch(clearUserAction());
    dispatch(clearNotesAction());
    localStorage.removeItem("user");
    userContext.update(null);
    history.push("/login");
  });

  return <></>;
};

export default Logout;
