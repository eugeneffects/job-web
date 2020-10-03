import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../actions";
import useInput from "../customs/useInput";

const SignIn = () => {
  const dispatch = useDispatch();
  const failure = useSelector(({ authReducer }) => authReducer.failure);
  const [text, setText] = useInput({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(Auth.login({ text }));
  };

  useEffect(() => {
    if (failure !== 0) {
      setPassword("");
    }
  }, [failure]);

  return (
    <div className="container flex justify-center">
      <form className="" onSubmit={onSubmit}>
        <h2>로그인</h2>
        <div>
          <input
            name="username"
            value={text.username}
            onChange={setText}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div>
          <input
            name="password"
            value={text.password}
            onChange={setText}
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
