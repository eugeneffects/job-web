import { Auth } from "../actions";

const initialState = {
  auth: {},
  failure: 0,
  logged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Auth.LOGIN: {
      return {
        ...state,
        payload: action.payload,
      };
    }
    case Auth.LOGIN_SUCCESS: {
      const failure = action.valid ? state.failure : state.failure + 1;
      console.log("로그인 성공");
      return {
        ...state,
        logged: action.valid,
        failure,
      };
    }
    case Auth.SESSION_LOGIN: {
      return {
        ...state,
        logged: true,
      };
    }
    case Auth.LOGIN_FAIL: {
      return {
        ...state,
        error: action.error,
      };
    }
    case Auth.LOGOUT: {
      return {
        ...state,
        logged: false,
        failure: 0,
        auth: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
