const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SESSION_LOGIN = "SESSION_LOGIN";
const LOGIN_FAIL = "LOGIN_FAIL";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const loginFail = (error) => ({ type: LOGIN_FAIL, error });
const sessionLogin = () => ({ type: SESSION_LOGIN });
const logout = () => ({ type: LOGOUT });

const Auth = {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  SESSION_LOGIN,
  LOGIN_FAIL,
  login,
  loginSuccess,
  loginFail,
  sessionLogin,
  logout,
};

export default Auth;
