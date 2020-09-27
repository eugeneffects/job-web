const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const loginFail = (error) => ({ type: LOGIN_FAIL, error });

const Auth = {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  login,
  loginSuccess,
  loginFail,
};

export default Auth;
