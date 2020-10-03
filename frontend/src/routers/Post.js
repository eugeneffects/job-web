import React, { useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/v1/post/";

const Post = () => {
  const dispatch = useDispatch();
  useEffect =
    (() => {
      axios.get(URL).then((res) => {
        const {
          data: { title, content },
        } = res;
      });
      dispatch({});
    },
    []);
  return (
    <div>
      <h1 className="uppercase">Post</h1>
    </div>
  );
};

export default Post;
