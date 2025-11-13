import { useState } from 'react';
import styles from './ContatoForm.module.css';

export const ContatoForm = ({ onAddContato }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    if (!nome || !email) {
      alert("Nome e Email são obrigatórios!");
      return;
    }

    onAddContato({ 
      nome: nome, 
      email: email, 
      foto: foto || "https://placehold.co/300x200/cccccc/FFF?text=?"
    });

    setNome('');
    setEmail('');
    setFoto('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Adicionar Novo Contato</h3>
      <input 
        type="text" 
        placeholder="Nome" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input 
        type="text" 
        placeholder="URL da Foto" 
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Adicionar</button>
    </form>
  );
};