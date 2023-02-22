import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertDismissible = ({ variant, icon, title, children }) => {
  // States
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => setShow(false)}
        dismissible
        className="mx-2"
      >
        <Alert.Heading>
          {icon} {title}
        </Alert.Heading>
        <p>{children}</p>
      </Alert>
    );
  }
  return <></>;
};

export default AlertDismissible;
