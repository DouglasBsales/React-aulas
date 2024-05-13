import { useState, useEffect } from "react";

// 4 CUSTOM HOOK
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //5 REFATORANDO O POST

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallfetch] = useState(false);

  // 5 REFATORANDO O POST

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    };

    fetchData();
  }, [url, callFetch]); // sempre que alterado chama o fech novamente para trazer os dadose exibilos na tela

  // 5 REFATORANDO O POST

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let newFetch = [url, config];
        const response = await fetch(...newFetch);
        const json = await response.json();

        setCallfetch(json);
      }
    };

    httpRequest();
  }, [url, method, config]);

  return { data, httpConfig };
};
