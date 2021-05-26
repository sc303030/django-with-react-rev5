import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";
import { useAppContext } from "store";

const apiUrl = "http://127.0.0.1:8000/api/posts/";

function PostList() {
  const {
    store: { jwtToken },
    dispatch,
  } = useAppContext();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response;
        console.log("loaded response : ", response);
        setPostList(data);
      })
      .catch((error) => {});
    console.log("mounted");
  }, []);

  return (
    <div>
      {postList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
