import React from "react";
import AnimeC from "./AnimeComp";
// import BG from "../Icons/peak.jpeg"

function Animes(props) {
  const BackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="container" style={{ marginTop: "190px" }}>
      <div className="container">
        <div className="row">
          {props.animeData && props.animeData.length > 0
            ? props.animeData.map((item) => {
                return (
                  <div className="col-md-4" key={item.mal_id}>
                    <AnimeC
                      title={item.title}
                      description={item.synopsis}
                      imageUrl={item.images.jpg.image_url}
                      genres={item.genres}
                      rating={item.rating}
                      aired={item.aired.string.slice(0, 12)}
                      type={item.type}
                      status={item.status}
                      moreInfoUrl={item.url}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      {props.animeData && props.animeData.length > 0 && (
        <div className="container d-flex justify-content-between mb-5">
          {!(props.page <= 1) ? (
            <button
              disabled={props.page <= 1}
              className="btn btn-secondary"
              type="submit"
              onClick={props.handlePrevious}
            >
              &larr;Previous
            </button>
          ) : (
            <div></div>
          )}
          <p style={{ color: "white" }}>Page-{props.page}</p>
          {!(props.page >= props.lpage) ? (
            <button
              disabled={props.page >= props.lpage}
              className="btn btn-secondary"
              type="submit"
              onClick={props.handleNext}
            >
              &rarr; Next
            </button>
          ) : (
            <div></div>
          )}
        </div>
      )}
      {props.animeData && props.animeData.length > 0 && (
        <div className="container d-flex justify-content-center align-items-center" style={{marginBottom:"20px"}}>
          <button
              className="btn btn-secondary"
              type="submit"
              onClick={BackToTop}
              style={{backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"}}
            >
             Back to Top &uarr; 
            </button>
        </div>
      )}
      
    </div>
  );
}

export default Animes;

// https://api.jikan.moe/v4/anime?q=One%20Piece&sfw
