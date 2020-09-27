import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { Auth } from "../actions";

const URL = "http://127.0.0.1:8000/api/v1/user/";

function* fetchAuthSaga(action) {
  const { payload } = action;
  try {
    const {
      data: { valid, token },
    } = yield call([axios, "post"], URL, payload);
    window.sessionStorage.setItem("token", token);
    console.log(token);
    console.log(valid);
    yield put(Auth.loginSuccess(valid));
  } catch (error) {
    yield put(Auth.loginFail(error));
  }
}

export default function* wathAuth() {
  yield takeEvery(Auth.LOGIN, fetchAuthSaga);
}
