import React from "react";
import { House, InfoCircle, FileCode, Telephone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../Styles/sidebar.css";

export const SideBar = (props) => {
  return (
    <div>
      <div className="sidebar">
        <Link to="/">
          <House
            className="house"
            style={{ color: props.title === "house" ? "red" : "white" }}
          />
        </Link>
        <Link to="/about">
          <InfoCircle
            className="about"
            style={{ color: props.title === "about" ? "red" : "white" }}
          />
        </Link>
        <Link to="/projects">
          <FileCode
            className="file"
            style={{ color: props.title === "file" ? "red" : "white" }}
          />
        </Link>
        <Link to="/contact">
          <Telephone
            className="telephone"
            style={{ color: props.title === "telephone" ? "red" : "white" }}
          />
        </Link>
      </div>
    </div>
  );
};
