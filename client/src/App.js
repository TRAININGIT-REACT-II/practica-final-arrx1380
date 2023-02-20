import { useEffect, useState } from "react";
import Status from "./components/Status";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import ViewContext from "./contexts/view";
import SortContext from "./contexts/sort";
import ThemeContext from "./contexts/theme";
import { VIEWS } from "./constants/views";
import { SORTS } from "./constants/sorts";
import { THEMES } from "./constants/themes";

// Main APP
const App = () => {
  // Statuses
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(VIEWS.list);
  const [sort, setSort] = useState(SORTS.updated);
  const [theme, setTheme] = useState(THEMES.light);

  // Effects
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  console.log(view, sort, theme);

  return (
    <ThemeContext.Provider value={{ current: theme, update: setTheme }}>
      <NavBar />
      <ViewContext.Provider value={{ current: view, update: setView }}>
        <SortContext.Provider value={{ current: sort, update: setSort }}>
          <Content view={ViewContext.current} sort={SortContext.current}>
            <p>
              Estado del servidor:
              {loading ? " Cargando..." : <Status status={status} />}
            </p>
            <p>Vista: {view}</p>
            <p>Ordenar por: {sort}</p>
            <p>Tema: {theme}</p>
          </Content>
        </SortContext.Provider>
      </ViewContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
