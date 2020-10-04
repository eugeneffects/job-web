const { useState, useEffect } = require("react");

import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    await axios.get(url).then((response) => {
      setData(response.data);
    });
    setLoading(!loading);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};

export { useFetch };
