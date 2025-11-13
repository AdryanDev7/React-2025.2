import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/footer.jsx';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;