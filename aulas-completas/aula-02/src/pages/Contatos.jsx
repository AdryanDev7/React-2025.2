
import { useState, useEffect } from 'react';
import api from '../services/api.jsx'; 

import styles from "../App.module.css"; 
import { ContatoForm } from "../components/ContatoForm/ContatoForm";
import { ContatoList } from "../components/ContatoList/ContatoList";

export const Contatos = () => {
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    const fetchContacts = async () => {
      try {

        const response = await api.get('/users');
        const formattedContacts = response.data.map(user => ({
          nome: user.name,
          email: user.email,
          foto: `https://placehold.co/300x200/646cff/FFF?text=${user.username.charAt(0)}`
        }));

        setContacts(formattedContacts);

      } catch (err) {

        console.error("Erro ao buscar contatos:", err);
        setError("Não foi possível carregar os contatos.");
      
      } finally {

        setLoading(false);
      }
    };

    fetchContacts();
    
  }, []);

  const addContact = (novoContato) => {
    setContacts( (listaAntiga) => [...listaAntiga, novoContato] );
  };

  const removeContact = (indexParaRemover) => {
    const novaLista = contacts.filter((_, index) => index !== indexParaRemover);
    setContacts(novaLista);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Carregando Contatos...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title} style={{ color: 'red' }}>{error}</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciador de Contatos (API)</h1>
      <p>Buscado de: jsonplaceholder.typicode.com</p>

      <ContatoForm onAddContato={addContact} />
      <ContatoList contacts={contacts} onRemoveContact={removeContact} />
      
    </div>
  );
}