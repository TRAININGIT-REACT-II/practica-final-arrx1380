import React from "react";
import AlertDismissible from "../components/AlertDismissible";
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
          <AlertDismissible
            variant="danger"
            icon={<ExclamationTriangle />}
            title="Error"
          >
            {this.props.message}
          </AlertDismissible>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
