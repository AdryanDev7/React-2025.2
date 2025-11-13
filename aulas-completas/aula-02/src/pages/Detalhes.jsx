import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Detalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleVoltar = () => {
    navigate("/contatos"); 
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Página de Detalhes</h1>
      <p>Exibindo detalhes para o contato ID: <strong>{id}</strong></p>
      <button onClick={handleVoltar}>Voltar para a Lista</button>
    </div>
  );
};