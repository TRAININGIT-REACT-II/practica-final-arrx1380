import { Link } from "react-router-dom";
import { ExclamationTriangle } from "react-bootstrap-icons";

const PageNotFound = ({ text }) => {
  return (
    <div className="vh-100 bg-danger text-white">
      <div className="d-flex justify-content-center fs-2">
        <div className="mt-4">
          <ExclamationTriangle /> {text}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/" className="text-white">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
