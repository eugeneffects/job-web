const POST_SUCCESS = "POST_SUCCESS";
const POST_FAILURE = "POST_FAILURE";

const postSuccess = (data) => ({ type: POST_SUCCESS, data });
const postFailure = (error) => ({ type: POST_FAILURE, error });

const Post = {
  POST_SUCCESS,
  POST_FAILURE,
  postSuccess,
  postFailure,
};

export default Post;
