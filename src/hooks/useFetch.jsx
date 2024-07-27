import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmI5MWJlM2IzZjY3OTJiOWU2OGY1MzRiMWRlMDIwZiIsIm5iZiI6MTcyMjA3NDYwMS4wNjQ3OTYsInN1YiI6IjY0MzNjNjM2MWY5OGQxMDFjYmE3MmMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcmB4xPQkqzSo982jA_s39l_1p8NcQaosXRM5gn5POM'
                }
            });
        
        if (!response.ok) {
          throw new Error("Connection Error");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
