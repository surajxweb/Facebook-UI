import React, { useState } from "react";
import styles from "./InputForm.module.css";

import { MdOutlineEditNote } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import GifComp from "./GifComp";

const InputForm = ({ setInputText, posts, setPosts, inputText }) => {
  const [textMode, setTextMode] = useState(true);

  const inputTextHandeller = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const getDateString = () => {
    const monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = `${d.getHours()}`.padStart(2, 0);
    let minutes = `${d.getMinutes()}`.padStart(2, 0);

    let daylast = +day.toString().split("").pop();

    let daytype;
    if (daylast === 1) {
      daytype = "st";
    } else if (daylast === 2) {
      daytype = "nd";
    } else if (daylast === 3) {
      daytype = "rd";
    } else {
      daytype = "th";
    }

    return `on ${day}${daytype} ${monthArray[month]}, ${year} at ${hours}:${minutes}`;
  };

  const submitPostHandeller = (e) => {
    e.preventDefault();

    let dateString = getDateString();

    setPosts((prev) => [
      {
        type: "text",
        content: inputText,
        id: Math.random() * 1000,
        dateString: dateString,
      },
      ...prev,
    ]);
    setInputText("");
    console.log(posts);
  };

  const textModeHandeller = () => {
    setTextMode(true);
  };

  const gifModeHandeller = () => {
    setTextMode(false);
  };

  return (
    <div className={styles.post_area}>
      <div className={styles.controles}>
        <button onClick={textModeHandeller}>
          <MdOutlineEditNote
            className={styles.logo_icon}
            color="white"
            size="2.25em"
          />
          Text
        </button>

        <button onClick={gifModeHandeller}>
          <FaPhotoVideo
            className={styles.logo_icon}
            color="white"
            size="2.25em"
          />
          Gif
        </button>
      </div>
      <div className={styles.input_area}>
        {!textMode && (
          <GifComp
            getDateString={getDateString}
            posts={posts}
            setPosts={setPosts}
          />
        )}
        {textMode && (
          <form className={styles.textbox} onSubmit={submitPostHandeller}>
            <input
              value={inputText}
              onChange={inputTextHandeller}
              required
              type="text"
              className="postinput"
              placeholder="What's on your mind?"
              required
            />
            <button type="submit">Post</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InputForm;
