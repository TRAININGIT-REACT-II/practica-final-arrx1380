import { createContext } from "react";
import { VIEWS } from "../constants/views";

const ViewContext = createContext({
  current: VIEWS.list,
  update: () => {},
});

export default ViewContext;
