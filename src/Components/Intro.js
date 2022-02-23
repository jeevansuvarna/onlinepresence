import React from "react";
import "../Styles/intro.css";
import { Link } from "react-router-dom";
export const Intro = () => {
  return (
    <div className="wrapper">
      <div className="static-txt">Hi,</div>
      <ul className="dynamic-txt">
        <li>
          <span>
            I'm &nbsp;<p>J</p>eevan &nbsp;<p>S</p>uvarna,
          </span>
          <span className="des">
            <br></br>
            <p>W</p>eb&nbsp;<p>D</p>eveloper.
          </span>
        </li>
      </ul>
      <Link
        to={{
          pathname: "https://drive.google.com/file/d/1Qs0DVfS2yxIh1GIL9x4sT8vjQFLc6nU1/view?usp=sharing",

        }}
        target="_blank"
      >
        {" "}
        <button>
          <center>Resume</center>
        </button>
      </Link>
    </div>
  );
};
