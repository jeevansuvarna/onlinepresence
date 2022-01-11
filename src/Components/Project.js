import React ,{ useState }from "react";
import "../Styles/project.css";
import { EyeFill,XLg } from "react-bootstrap-icons";
import 'react-slideshow-image/dist/styles.css'
import {Modal} from "./Model.js"
import {Images} from './Images.js'
import { project1,project2 } from "./projectimages";

export const Project = () => {
  const [show, setshow]  = useState(false)
  const [project, setproject]  = useState([])


  const openmodal=(Project)=>{
    setshow(true)
    setproject(Project)
  }
  const closemodal=()=>{
    setshow(false)
  }
//  console.log(project)
  return (
    <div className="wrapper-7">
      <Modal show = {show}  className="model">
      <XLg className="cross" onClick = {closemodal}  />
      <Images images = {project} > </Images>
      </Modal>

      <div className="project">
      <span>
        Projects <hr />
      </span>
      <h3>Search Engine</h3>
      <button className ="button" >Elasticsearch</button>
      <button className ="button">Vuejs</button>
      <button className ="button">Spring boot</button>
      <EyeFill className="eye" onClick={() => openmodal(project1)} />
  
      <h3>Library Management System</h3>
      <button className ="button" >Laravel</button>
      <button className ="button">PHP</button>
      <button className ="button">HTML & CSS</button>
      <EyeFill className="eye" onClick={() => openmodal(project2)}/>
    
      <h3>Employee Management System</h3>
      <button className ="button" >Mongo</button>
      <button className ="button">Nodejs</button>
      <button className ="button">HTML & CSS</button>
      {/* <EyeFill className="eye" onClick = {openmodal} /> */}
     </div>
    </div>
    
  );
};
