import { Post } from "../actions";

const initialState = {
  data: [],
  loading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Post.POST_SUCCESS: {
      return { data: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
