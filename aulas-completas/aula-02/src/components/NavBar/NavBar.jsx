import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        EuSouBrabo
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to="/contatos" className={styles.navLink}>Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};