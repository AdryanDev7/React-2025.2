import { useState, useEffect } from 'react';
import React from 'react';
import api from './services/api.js';
import './App.css';

function App() {
  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    async function fetchUsuarios() {
      try {
        const response = await api.get('/users');
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsuarios();

  }, []); 

  return (
    <div className="container">
      
      <h1>Lista de Usuários da API</h1>
      
      <div className="user-list">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="user-card">
            <h2>{usuario.name}</h2>
            <p>{usuario.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;