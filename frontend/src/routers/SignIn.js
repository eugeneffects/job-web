import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const failure = useSelector(({ authReducer }) => authReducer.failure);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeAccount = (e) => {
    const {
      target: { value },
    } = e;
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Auth.login({ username, password }));
  };

  useEffect(() => {
    if (failure !== 0) {
      setPassword("");
    }
  }, [failure]);

  return (
    <div className="flex justify-center justify-items-stretch">
      <form className="" onSubmit={onSubmit}>
        <h2>로그인</h2>
        <div>
          <input
            value={username}
            onChange={onChangeAccount}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="비번을 입력하세요"
            autoComplete="off"
          />
        </div>
        <button>로그인</button>
      </form>
      {failure > 0 ? <p>로그인 실패: {failure}</p> : null}
    </div>
  );
};

export default SignIn;
