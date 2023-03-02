import { createContext } from "react";
import { SORTS } from "../constants/sorts";

const SortContext = createContext({
  current: SORTS.updated,
  update: () => {},
});

export default SortContext;
