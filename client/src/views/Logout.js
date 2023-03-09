import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import ThemeContext from "../contexts/theme";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import { THEMES } from "../constants/themes";
import { clearUserAction } from "../actions/user";

const Logout = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Contexts
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);
  const themeContext = useContext(ThemeContext);

  // Effects
  useEffect(() => {
    dispatch(clearUserAction());
    viewContext.update(VIEWS.default);
    sortContext.update(SORTS.default);
    themeContext.update(THEMES.default);
  }, []);

  return <></>;
};

export default Logout;
