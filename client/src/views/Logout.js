import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserAction } from "../actions/user";
import { useHistory } from "react-router";

const Logout = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Effects
  useEffect(() => {
    dispatch(clearUserAction());
    // history.push("/login");
  }, []);

  return <></>;
};

export default Logout;
