import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LoginForm(props) {
  return (
    <div className="form-group" class="animate__animated animate__zoomInUp animate__delay-2s">
      <span>
      <input className="form-control"/>
      </span>
    </div>
  );
}

export default LoginForm;





























  