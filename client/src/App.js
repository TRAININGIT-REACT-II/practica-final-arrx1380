import { useEffect, useState } from "react";
import Status from "./components/Status";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  // Mostramos la aplicación
  return (
    <div>
      <NavBar />
      <Content>
        <p>
          Estado del servidor:
          {loading ? " Cargando..." : <Status status={status} />}
        </p>
      </Content>
    </div>
  );
};

export default App;
