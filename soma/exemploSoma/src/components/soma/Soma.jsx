import React from 'react';
import styles from './Soma.module.css';

const Soma = () => {
    const numeros = [1, 2, 3, 4, 5];

    const calcular = (numeros) => {
        return numeros.reduce((total, numero) => total + numero, 0);
    }

    return (
        <div className={styles.somaContainer}>
            <h2 className={styles.titulo}>Soma dos Números</h2>
            <p className={styles.resultado}>
                Resultado: {calcular(numeros)}
            </p>
        </div>
    );
};

export default Soma;