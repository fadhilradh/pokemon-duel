import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosGet = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await axios.get(url);
        const data = await response.data;

        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setError(err.message);
      }
    }
    fetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useAxiosGet;
