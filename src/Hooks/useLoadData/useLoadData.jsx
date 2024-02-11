import axios from "axios";
import React, { useEffect, useState } from "react";

const useLoadData = (url) => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3000${url}`).then((res) => {
      setData(res.data);
      setDataLoading(false);
    });
  }, [url]);

  return [data, dataLoading];
};

export default useLoadData;
