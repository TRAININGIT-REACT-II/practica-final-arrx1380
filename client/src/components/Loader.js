import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ text }) => {
  // Contexts
  const themeContext = useContext(ThemeContext);

  return (
    <div className="px-3 pt-4">
      <Spinner
        animation="border"
        variant={
          themeContext.current === THEMES.light ? THEMES.dark : THEMES.light
        }
        size="sm"
      />
      <span
        className={`m-2 ${
          themeContext.current === THEMES.dark ? "text-white" : null
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Loader;
