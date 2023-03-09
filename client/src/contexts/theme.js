import { createContext } from "react";
import { THEMES } from "../constants/themes";

const ThemeContext = createContext({
  current: THEMES.default,
  update: () => {},
});

export default ThemeContext;
