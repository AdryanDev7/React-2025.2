import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './ContactCard.module.css';

export const ContactCard = ({ nome, foto, email, onRemove, id }) => {

  return (
    <div className={styles.card}>
      
      <img src={foto} alt={nome} className={styles.image} />
      
      <div className={styles.content}>
        <h2 className={styles.nome}>
          <Link to={`/detalhes/${id}`} className={styles.linkNome}>
            {nome}
          </Link>
        </h2>
        
        <p className={styles.description}>{email}</p>
      </div>

      <button onClick={onRemove} className={styles.removeButton}>
        X
      </button>
      
    </div>
  );
};