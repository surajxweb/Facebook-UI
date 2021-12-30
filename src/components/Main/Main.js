import React, { useState } from "react";
import InputForm from "./InputForm";
import styles from "./Main.module.css";
import Timeline from "./Timeline";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <div className={styles.main}>
      <InputForm
        inputText={inputText}
        setInputText={setInputText}
        posts={posts}
        setPosts={setPosts}
      />
      <Timeline posts={posts} />
    </div>
  );
};

export default Main;
