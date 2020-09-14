import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoricoFatoriais = () => {
  const [fatoriaisState, setFatorialState] = useState([]);

  const fetchHistoricoFatoriais = () => {
    axios.get("http://localhost:8080/api/fatorial").then((res) => {
      setFatorialState(res.data);
    });
  };

  useEffect(() => {
    fetchHistoricoFatoriais();
  }, []);
  

  return fatoriaisState.slice(0).reverse().map((fatorialState, index) => {
    return (
      <tr key={index}>
        <td scope="row">{index+1}</td>
        <td>{fatorialState.valor}</td>
        <td>{fatorialState.resultado}</td>
      </tr>
    );
  });
};

export default HistoricoFatoriais