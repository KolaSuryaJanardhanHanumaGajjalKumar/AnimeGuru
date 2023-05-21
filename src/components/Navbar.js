import React from "react";

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg" style={{position:"fixed",top:"0",width:"100%" ,backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",zIndex:"1"}}>
        <div className="container-fluid" >
          <a className="navbar-brand" style={{color: "white"}} href="/">
            <h3>AnimeGuru</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  TV Series
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

