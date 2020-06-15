import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (api: string) => {
    
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("fetching data");
        await axios
          .get(api)
          .then((res: any) => setStats(res.data))
          .then((res: any) => console.log(res));
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);

  return { stats, error };
};

export default useFetch;
