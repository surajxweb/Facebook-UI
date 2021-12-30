import React from "react";
import styles from "./Post.module.css";

import display_pic from "../../assets/guy.png";

const Post = (props) => {
  let display_content;
  if (props.type === "text") {
    display_content = props.content;
  } else {
    display_content = (
      <div>
        <img src={props.content} alt="gif" />
      </div>
    );
  }
  return (
    <div className={styles.post}>
      <div className={styles.postheader}>
        <div className={styles.postimage}>
          <img src={display_pic} alt="Display" />
        </div>
        <div className={styles.postinfo}>
          <h3>Suraj Katyayan</h3>
          <p>{props.dateString}</p>
        </div>
      </div>
      <div className={styles.postcontent}>{display_content}</div>
    </div>
  );
};

export default Post;
