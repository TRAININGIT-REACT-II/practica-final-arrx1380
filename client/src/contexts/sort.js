import { createContext } from "react";
import { SORTS } from "../constants/sorts";

const SortContext = createContext({
  current: localStorage.getItem("sort") ?? SORTS.updated,
  update: () => {},
});

export default SortContext;
