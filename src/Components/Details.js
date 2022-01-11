import React from "react";
import "../Styles/details.css";
import { Skills } from "./Skills";
export const Details = () => {
  return (
    <>
      <div className="wrapper-3">
        <div className="details">
        <span>
          About me <hr className="break" />
        </span>
        <p className="para">
          <br></br>I am a web developer. I have worked on many Web development projects . I
          have keen interest in learning and exploring new technologies. I have
          recently completed my B.E in Information Science and Technology.
          Writing clean, optimized code for any software is my moto.
        </p>
        </div>
        <div className="skills">
        <Skills />
        </div>
      </div>
    </>
  );
};
