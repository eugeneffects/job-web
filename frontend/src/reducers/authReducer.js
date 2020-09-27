import { Auth } from "../actions";

initialState = {
  data: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Auth.LOGIN: {
      return {
        ...state,
        payload: action.payload,
      };
    }
  }
};

export default authReducer;
