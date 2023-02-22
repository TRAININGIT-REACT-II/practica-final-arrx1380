import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";

const Content = ({ children }) => {
  // Contexts
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`vh-100 ${
        themeContext.current === THEMES.dark ? "bg-dark bg-opacity-75" : null
      }`}
    >
      {children}
    </div>
  );
};

export default Content;
