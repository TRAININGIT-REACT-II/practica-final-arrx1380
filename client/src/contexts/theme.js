import { createContext } from "react";
import { THEMES } from "../constants/themes";

const ThemeContext = createContext({
  current: localStorage.getItem("theme") ?? THEMES.light,
  update: () => {},
});

export default ThemeContext;
