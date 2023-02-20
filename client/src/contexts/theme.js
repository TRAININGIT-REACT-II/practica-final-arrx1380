import { createContext } from "react";
import { THEMES } from "../constants/themes";

const ThemeContext = createContext({
  current: THEMES.light,
  update: () => {},
});

export default ThemeContext;
