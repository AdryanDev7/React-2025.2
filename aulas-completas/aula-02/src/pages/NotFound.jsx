import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Oops! 404</h1>
      <p>Página não encontrada.</p>
      <Link to="/">Voltar para a Página Inicial</Link>
    </div>
  );
};