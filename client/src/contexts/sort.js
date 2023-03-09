import { createContext } from "react";
import { SORTS } from "../constants/sorts";

const SortContext = createContext({
  current: SORTS.default,
  update: () => {},
});

export default SortContext;
