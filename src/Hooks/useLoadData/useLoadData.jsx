import axios from "axios";
import { useEffect, useState } from "react";

const useLoadData = (url) => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    axios(`https://summer-course-school-server.vercel.app${url}`).then((res) => {
      if (isMounted) {
        setData(res.data);
        setDataLoading(false);
      }
    });

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, dataLoading];
};

export default useLoadData;
