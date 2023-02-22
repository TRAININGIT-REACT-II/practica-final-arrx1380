import { useState } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import NotesContent from "./components/NotesContent";
import ViewContext from "./contexts/view";
import SortContext from "./contexts/sort";
import ThemeContext from "./contexts/theme";
import { VIEWS } from "./constants/views";
import { SORTS } from "./constants/sorts";
import { THEMES } from "./constants/themes";
import ErrorBoundary from "./components/ErrorBoundary";

// Main APP
const App = () => {
  // Statuses
  const [view, setView] = useState(VIEWS.cards);
  const [sort, setSort] = useState(SORTS.title);
  const [theme, setTheme] = useState(THEMES.light);

  return (
    <ThemeContext.Provider value={{ current: theme, update: setTheme }}>
      <ViewContext.Provider value={{ current: view, update: setView }}>
        <SortContext.Provider value={{ current: sort, update: setSort }}>
          <Content>
            <NavBar />
            <ErrorBoundary message="Ha ocurrido un error obteniendo los datos del servidor">
              <NotesContent />
            </ErrorBoundary>
          </Content>
        </SortContext.Provider>
      </ViewContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
