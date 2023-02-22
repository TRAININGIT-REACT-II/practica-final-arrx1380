import { useEffect, useState } from "react";
import Status from "./components/Status";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import NotesContent from "./components/NotesContent";
import Notes from "./components/Notes";
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
  const [view, setView] = useState(VIEWS.cards);
  const [sort, setSort] = useState(SORTS.title);
  const [theme, setTheme] = useState(THEMES.light);

  // Effects
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  const notes = [
    {
      id: 1,
      title: "Nota 1",
      note: "Esto es una nota jqowrej oqwiej",
      created: "2020-02-21 19:18",
      updated: "2020-02-21 19:18",
    },
    {
      id: 2,
      title: "Nota 2",
      note: "Esto es una nota qweqwe ",
      created: "2021-02-20 16:18",
      updated: "2021-02-21 19:18",
    },
    {
      id: 3,
      title: "Nota 3",
      note: "Esto es una notaqweqwe q",
      created: "2021-02-20 12:13",
      updated: "2021-02-21 14:12",
    },
    {
      id: 4,
      title: "Nota 4",
      note: "Esto es una nota qweqew",
      created: "2022-02-20 19:11",
      updated: "2022-02-21 19:14",
    },
    {
      id: 5,
      title: "Nota 5",
      note: "Esto es una nota qweqe",
      created: "2023-02-20 19:11",
      updated: "2023-02-21 19:12",
    },
  ];

  return (
    <ThemeContext.Provider value={{ current: theme, update: setTheme }}>
      <ViewContext.Provider value={{ current: view, update: setView }}>
        <SortContext.Provider value={{ current: sort, update: setSort }}>
          <Content>
            <NavBar />
            <NotesContent>
              {/* <p>
              Estado del servidor:
              {loading ? " Cargando..." : <Status status={status} />}
            </p> */}
              {notes.length ? (
                <Notes notes={notes} />
              ) : (
                <div className="p-3 text-black-50">No hay notas</div>
              )}
            </NotesContent>
          </Content>
        </SortContext.Provider>
      </ViewContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
