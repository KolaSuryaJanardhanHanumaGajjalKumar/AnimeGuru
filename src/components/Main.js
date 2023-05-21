import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Spinner from "./Spinner";
import Animes from "./Animes";
import Footer from "./Footer";

function Main(props) {
  const [loading, setLoading] = useState(false);
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState("");
  const limit = 24;
  const [page, setPage] = useState(1);
  const [lpage, setLPage] = useState(0);

  const getDataFromSearch = (searchKey) => {
    props.setProgress(10);
    setSearch(searchKey);
    setLoading(true);
    const getAnimeData = async () => {
      let url = `https://api.jikan.moe/v4/anime?q=${searchKey}&limit=${limit}&page=${page}`;
      const rawData = await fetch(url);
      props.setProgress(30);
      const parsedData = await rawData.json();
      props.setProgress(70);
      const anmData = parsedData.data;
      if (anmData && anmData.length > 0) {
        setLoading(false);
        setAnimeData(anmData);
        setLPage(parsedData.pagination.last_visible_page);
        // console.log(page, lpage);
        props.setProgress(100);
      }
      //   console.log(parsedData);
    };
    getAnimeData();
  };
  // console.log(loading, animeData, "Loading Animes");

  const handlePrevious = () => {
    props.setProgress(10);
    // console.log("Previous");
    setLoading(true);
    const getAnimeData = async () => {
      let url = `https://api.jikan.moe/v4/anime?q=${search}&limit=${limit}&page=${
        page - 1
      }`;
      const rawData = await fetch(url);
      props.setProgress(30);
      const parsedData = await rawData.json();
      props.setProgress(70);
      const anmData = parsedData.data;
      if (anmData && anmData.length > 0) {
        setLoading(false);
        setAnimeData(anmData);
        setLPage(parsedData.pagination.last_visible_page);
        // console.log(page, lpage);
        props.setProgress(100);
      }
      //   console.log(parsedData);
    };
    getAnimeData();
    setPage(page - 1);
  };

  const handleNext = () => {
    props.setProgress(10);
    console.log("Next");
    setLoading(true);
    const getAnimeData = async () => {
      let url = `https://api.jikan.moe/v4/anime?q=${search}&limit=${limit}&page=${
        page + 1
      }`;
      const rawData = await fetch(url);
      props.setProgress(30);
      const parsedData = await rawData.json();
      props.setProgress(70);
      const anmData = parsedData.data;
      if (anmData && anmData.length > 0) {
        setLoading(false);
        setAnimeData(anmData);
        setLPage(parsedData.pagination.last_visible_page);
        // console.log(page, lpage);
        props.setProgress(100);
      }
      //   console.log(parsedData);
    };
    getAnimeData();
    setPage(page + 1);
  };
  return (
    <div>
      <Navbar />
      <Search getDataFromSearch={getDataFromSearch} />
      {loading && <Spinner />}
      {!loading && (
        <Animes
          animeData={animeData}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          page={page}
          lpage={lpage}
        />
      )}
      {!loading && <Footer lpage={lpage} />}
    </div>
  );
}

export default Main;
