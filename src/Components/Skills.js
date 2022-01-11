import React from "react";
import "../Styles/skills.css";

export const Skills = () => {
  return (
    <div className="wrap">
       <span className="l">Languages</span>
      <div className="lang">
        <center>
          <button>JavaScript</button>
          <button>C++</button>
          <button>C</button>
          <button>Python</button>
          <button>Java</button>
          <button>PHP</button>
        </center>
      </div>
     <span className="l">Framework</span>
     <div className="lang">

        <center>
          <button>Nodejs</button>
          <button>Expressjs</button>
          <button>Reactjs</button>
          <button>Spring Boot</button>
        </center>
      </div>
      <span className="l">Computer Science Concepts</span>
      <div className="lang">

        <center>
          <button>Data Structure</button>
          <button>Algorithms</button>
          <button>SQL</button>
          <button>MongoDB</button>
        </center>
      </div>
      <span className="l">Other tools</span>
      <div className="lang">

        <center>
          <button>Materialize Css</button>
          <button>Bootstrap</button>
          <button>XD Adobe</button>
        </center>
      </div> 
    </div>
  );
};
