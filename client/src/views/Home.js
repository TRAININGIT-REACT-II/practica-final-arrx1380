import NavBar from "../components/NavBar";
import Content from "../components/Content";
import NotesContent from "../components/NotesContent";
import ErrorBoundary from "../components/ErrorBoundary";

const Home = () => {
  return (
    <Content>
      <NavBar />
      <ErrorBoundary message="Ha ocurrido un error obteniendo los datos del servidor">
        <NotesContent />
      </ErrorBoundary>
    </Content>
  );
};

export default Home;
