import { useState, useEffect } from "react";

// CUSTOM HOOKS

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      const data = await response.json();

      setDados(data);
    };

    fetchData();
  }, [url]);

  return { dados };
};
