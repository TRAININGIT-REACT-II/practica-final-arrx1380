import { useState } from "react";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import { THEMES } from "../constants/themes";

const useConfig = () => {
  // States
  const [view, setView] = useState(VIEWS.cards);
  const [sort, setSort] = useState(SORTS.title);
  const [theme, setTheme] = useState(THEMES.light);

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
