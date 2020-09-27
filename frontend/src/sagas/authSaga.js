import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { Auth } from "../actions";

const URL = "http://127.0.0.1:8000/api/v1/user/";

function* fetchAuthSaga(action) {
  try {
    const { data } = yield call([axios, "get"], URL);
    yield put(Auth.loginSuccess(data));
  } catch (error) {
    yield put(Auth.loginFail(error));
  }
}

export default function* wathAuth() {
  yield takeEvery(Auth.LOGIN, fetchAuthSaga);
}
