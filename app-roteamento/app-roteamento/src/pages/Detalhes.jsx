import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();
  return (
    <div>
      <h2>Detalhes do ID: {id}</h2>
      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Detalhes;