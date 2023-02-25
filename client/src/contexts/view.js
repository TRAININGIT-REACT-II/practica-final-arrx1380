import { createContext } from "react";
import { VIEWS } from "../constants/views";

const ViewContext = createContext({
  current: localStorage.getItem("view") ?? VIEWS.list,
  update: () => {},
});

export default ViewContext;
