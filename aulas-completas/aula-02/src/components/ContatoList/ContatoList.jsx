import React from 'react';
import { ContactCard } from '../ContactCard/ContactCard'; 
import styles from './ContatoList.module.css';

export const ContatoList = ({ contacts, onRemoveContact }) => {
  return (
    <div className={styles.grid}>
      
      {contacts.map((contato, index) => (
        <ContactCard
          key={index}
          id={index} 
          nome={contato.nome}
          email={contato.email}
          foto={contato.foto}
          onRemove={() => onRemoveContact(index)}
        />
      ))}
    </div>
  );
};