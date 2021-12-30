import React from "react";
import Post from "./Post";

const Timeline = ({ posts }) => {
  return (
    <div>
      {posts.map((eachPost) => (
        <Post
          key={eachPost.id}
          type={eachPost.type}
          id={eachPost.id}
          content={eachPost.content}
          dateString={eachPost.dateString}
        />
      ))}
    </div>
  );
};

export default Timeline;
