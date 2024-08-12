import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]); // State to store the fetched data

  const [loading, setLoading] = useState(true); // State to handle loading state

  const [error, setError] = useState(null); // State to handle error state

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // API endpoint

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result); // Set the data to state
      } catch (error) {
        setError(error); // Set the error to state if any
      } finally {
        setLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this effect runs once on mount

  if (loading) {
    return <div>Your Content is loading..... </div>; // Render loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error state
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Render fetched data
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
