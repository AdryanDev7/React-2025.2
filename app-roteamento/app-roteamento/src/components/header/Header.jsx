import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

function Header() {
  return (
    // 2. Adicione os classNames
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>AppRoteamento</Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/detalhes/1" className={styles.navLink}>Detalhes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;