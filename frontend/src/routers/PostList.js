import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Post } from "../actions";

const URL = "http://localhost:8000/api/v1/post/";

const PostList = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ postReducer }) => postReducer.data);

  const fetchUrl = async () => {
    try {
      const response = await axios.get(URL);
      dispatch(Post.postSuccess(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
            <li>{item.content}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
