import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserAction } from "../actions/user";

const Logout = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Effects
  useEffect(() => {
    dispatch(clearUserAction());
  }, []);

  return <></>;
};

export default Logout;
