import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowPortafolio = () => {
  const [portafolio, setPortafolio] = useState([]);

  useEffect(() => {
    testAPIConnection();
  }, []);

  const testAPIConnection = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/portafolio");
      setPortafolio(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
}
export default ShowPortafolio;
