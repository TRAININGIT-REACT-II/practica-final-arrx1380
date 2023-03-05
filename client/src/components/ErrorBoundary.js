import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { ExclamationTriangle } from "react-bootstrap-icons";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.error === true) {
      return (
        <div className="m-2">
          <Alert variant="danger" icon={<ExclamationTriangle />} title="Error">
            {this.props.message}
            <br />
            Refresca la página
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
