import React ,{ useState }from "react";
import { SideBar } from "./SideBar";
import "../Styles/contact.css";
import { Instagram, Facebook, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import CircularProgress from '@material-ui/core/CircularProgress';



export const Contact = () => {
  const [load,setload] = useState(false);
  const [submit,setsubmit] = useState(true);

  function sendEmail(e) {
    setload(true);
    setsubmit(false);
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_6ow5vff",
        "template_j8414bc",
        e.target,
        "user_kNbtkWeqf5PTGh6GGFBUq"
      )
      .then(
        (result) => {
          setload(false);
          setsubmit(true);
          return (alert("success"))  
        },
        (error) => {
          return alert("Error!! Try Again");
        }
        
      );
    
  }
  const showbox = load ? "display-none" :"display-block";
  const showsubmit = submit ? "display-none" :"display-block";
  return (
    <>
    <SideBar title="telephone" />

    <div className="wrapper-4">
      <div className = "contact">
      
      <span>
        Contact Me <hr />
      </span>
      <form onSubmit={sendEmail}>
        <div className="name">
          <input type="text" placeholder="First Name" name="firstname" required autocomplete="off"></input>
          <input type="text" placeholder="Last Name" name="Lastname" required autocomplete="off"></input>
        </div>

        <input
          className="email"
          type="email"
          placeholder="Email"
          name="mail"
          required
          autocomplete="off"
        ></input>
        <br />
        <textarea
          class="message"
          type="textarea"
          placeholder="Type here..."
          name="message"
          required
          autocomplete="off"
        ></textarea>
        <br />
        
          <input type="submit" id="submit"  value="Submit" className={showsubmit}  />
         <center> <CircularProgress  id="circle" color="secondary"  className={showbox} /></center>

        

      
        
      </form>
    </div>




      <div className="shade">
        <Link
          to={{
            pathname: "https://instagram.com/jeevaaannnn?utm_medium=copy_link",
          }}
          target="_blank"
        >
          <Instagram className="instagram" id="instagram"/>
        </Link>

        <Link
          to={{
            pathname: "https://www.facebook.com/profile.php?id=100008000235490",
          }}
          target="_blank"
        >
          <Facebook className="instagram" id="fb"/>{" "}
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/jeevan-suvarna-741b19186",
          }}
          target="_blank"
        >
          {" "}
          <Linkedin className="instagram" id="linked" />
        </Link>

       
      </div>
    </div>
    </>
  );
};
