
import React, { useState, useEffect } from "react";

const Home = () => {
  const [apiData, setApi] = useState({ images: [] });
  const [search, setSearch] = useState("");

  const fetchImages = async (searchTerm = "") => {
    try {
      const query = searchTerm || "nature"; 
      const response = await fetch(
        `https://pixabay.com/api/?key=47534062-23de516974b6931e2467e675e&q=${query}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setApi({ images: data.hits });
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    fetchImages(); 
  }, [search]);

  const handleSearch = () => {
    fetchImages(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bgimage">
      <div className="brandName">
        <h1>Pixabay</h1>
        <div className="buttons">
          <button id="log" className="but">Login</button>
          <button id="join" className="but">Join</button>
          <button id="upload" className="but">
            <i className="fa-solid fa-arrow-up-from-bracket"></i> Upload
          </button>
        </div>
      </div>

      <div className="heading">
        <h1 id="head">Stunning royalty-free images & royalty-free stock</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for free Images, Videos, Music and more"
            id="place"
            value={search}
            onChange={handleChange}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <button id="sea" onClick={handleSearch}>Search</button>
        </div>

        <div className="image-results">
          {apiData.images.length > 0 ? (
            apiData.images.map((x, index) => (
              <img
                key={index}
                src={x.webformatURL}
                alt={x.tags}
                style={{ width: "250px", height: "200px", margin: "10px" }}
              />
            ))
          ) : (
            <p>No images found. Try a different search term.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
