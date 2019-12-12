import React from "react";
import "./ErrorMessage.scss";

function ErrorMessage() {
  return (
    <div className="error-message">
      <p>Oops! Something went wrong.</p>
      <p>Please check your internet connection.</p>
      <p>Or try again later!</p>
    </div>
  );
}

export default ErrorMessage;
