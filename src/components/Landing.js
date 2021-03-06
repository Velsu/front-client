import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="col-12 intro">
          <div className="intro__heading">
            <h1>Welcome to Lambda Notes</h1>
            <Link to="/login">
              <button>Log In</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
