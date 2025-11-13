import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;