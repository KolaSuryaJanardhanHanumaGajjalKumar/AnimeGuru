import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    props.getDataFromSearch(search.toLowerCase());
    setSearch("");
  };
  return (
    <div className="container fixed-top" style={{ marginTop: "130px", zIndex: "1",fontFamily:"'Poppins', sans-serif" }}>
      <form
        className="d-flex justify-content-center align-items-center "
        role="search"
        onSubmit={handleSearch}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleChange}
          required
          style={{backgroundImage: "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)"}}
        />
        <button
          className="btn"
          style={{
            color: "black",
            // backgroundColor: "ghostwhite",
            backgroundImage:
              "radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% )",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
