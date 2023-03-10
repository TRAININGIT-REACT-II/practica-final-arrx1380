import { useState } from "react";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import { THEMES } from "../constants/themes";

const useConfig = () => {
  // States
  const [view, setView] = useState(VIEWS.default);
  const [sort, setSort] = useState(SORTS.default);
  const [theme, setTheme] = useState(THEMES.default);

  return {
    view,
    setView,
    sort,
    setSort,
    theme,
    setTheme,
  };
};

export default useConfig;
