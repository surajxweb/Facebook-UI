import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GifComp.module.css";

const GifComp = (props) => {
  const [gifData, setGifData] = useState([]);
  const [inputGif, setInputGif] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "V4CzorjxlrnpbJF0tiA1JOvPSCbypHPX",
          limit: 12,
        },
      });

      console.log(results);
      setGifData(results.data.data);
    };

    fetchData();
  }, []);

  const postGifHandeller = (url) => {
    let dateString = props.getDateString();
    props.setPosts((prev) => [
      {
        type: "gif",
        content: url,
        id: Math.random() * 1000,
        dateString: dateString,
      },
      ...prev,
    ]);
    setInputGif("");
  };

  const renderGif = () => {
    return gifData.map((el) => {
      const imageClicked = () => {
        postGifHandeller(el.images.fixed_height.url);
        console.log("Clicked");
        console.log(el.images.fixed_height.url);
      };

      return (
        <div key={el.id} className="gif" onClick={imageClicked}>
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  const inputGifHandeller = (e) => {
    setInputGif(e.target.value);
    console.log(e.target.value);
  };

  const searchGifHandeller = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "V4CzorjxlrnpbJF0tiA1JOvPSCbypHPX",
          limit: 12,
          q: inputGif,
        },
      });

      console.log(results);
      setGifData(results.data.data);
    };

    fetchData();
    console.log("Submited Gif Search!");
    console.log(inputGif);
  };

  return (
    <div className={styles.gifForm}>
      <form onSubmit={searchGifHandeller}>
        <input
          value={inputGif}
          onChange={inputGifHandeller}
          required
          type="text"
          className="gifinput"
          placeholder="Search Gif..."
          required
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.gifContainer}>{renderGif()}</div>
    </div>
  );
};

export default GifComp;
