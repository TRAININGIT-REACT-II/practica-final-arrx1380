import { createContext } from "react";
import { VIEWS } from "../constants/views";

const ViewContext = createContext({
  current: VIEWS.default,
  update: () => {},
});

export default ViewContext;
