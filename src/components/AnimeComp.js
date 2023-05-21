import React from "react";
import "./AnimeComp.css";

function AnimeC(props) {
  return (
    <div className="container d-flex justify-content-center my-3" style={{fontFamily:"'Poppins', sans-serif"}}>
      <article className="card">
        <div className="card__inner">
          <div className="card__side card__side--front" style={{overflow:"hidden" }}>
            <div className="card__image-wrapper">
              <img src={props.imageUrl} alt="..." className="card__image" />
            </div>
            <div className="card__body card__body--flex" 
            // style={{}}
            >
              <h5
                className="card-title text-center"
                style={{ color: "#05396B"}}
              >
                {props.title}
              </h5>
            </div>
          </div>
          <div className="card__side card__side--back">
            <div className="card__body">
              <p>
                <strong style={{ color: "#389583" }}>Type: </strong>
                {props.type === "TV" ? "TV Series" : props.type}
              </p>
              <p className="text-center">
                <strong style={{ color: "#389583" }}>Genre: </strong>
                {props.genres.map((item) => {
                  return item.name + " ";
                })}
              </p>
              <p>
                <strong style={{ color: "#389583" }}>Aired: </strong>
                {props.aired}
              </p>
              <p>
                <strong style={{ color: "#389583" }}>Status: </strong>
                {props.status}
              </p>
              <p>
                <strong style={{ color: "#389583" }}>Rating: </strong>
                {props.rating}
              </p>
              <a
                href={props.moreInfoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ backgroundColor: "#389583" }}
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AnimeC;
