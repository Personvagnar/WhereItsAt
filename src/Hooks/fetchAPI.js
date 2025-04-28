import { useState, useEffect } from 'react';

const useFetchConcerts = () => {
  const [data, setData] = useState({ events: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await fetch('https://santosnr6.github.io/Data/events.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result && result.events && Array.isArray(result.events)) {
          setData(result);  // Set the entire data object
        } else {
          setError("API response is not in the expected format.");
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  return { data, isLoading, error };
};

export default useFetchConcerts;