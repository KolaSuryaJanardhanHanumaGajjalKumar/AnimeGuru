import React from "react";
import Fab from "../Icons/icons8-facebook-48.png";
import Ins from "../Icons/icons8-instagram-48.png";
import Git from "../Icons/icons8-github-48.png";
import Dis from "../Icons/icons8-discord-48.png";
import Lin from "../Icons/icons8-linkedin-48.png";

function Footer(props) {
  return (
    <>
      {props.lpage !== 0 && (
        <div
          className="bg-dark text-center text-white p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            position: "relative",
            width: "100%",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        >
          <p>CodeWithSurya © 2023 All Rights Reserved.</p>
          <div className="container d-flex justify-content-center" >
            <a href="https://www.linkedin.com/in/suryajanardhankola" target="_blank" rel="noreferrer">
              <img src={Lin} alt="" />
            </a>
            <a href="https://github.com/KolaSuryaJanardhanHanumaGajjalKumar" target="_blank" rel="noreferrer">
              <img src={Git} alt="" />
            </a>
            <a href="/">
              <img src={Fab} alt="" />
            </a>
            <a href="/">
              <img src={Ins} alt="" />
            </a>
            <a href="/">
              <img src={Dis} alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
