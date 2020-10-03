import { useState } from "react";

const useInput = (intialValue) => {
  const [data, setData] = useState(intialValue);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (value) {
      setData({
        ...data,
        [name]: value,
      });
    } else {
      setData("");
    }
  };
  return [data, onChange, setData];
};

export default useInput;
