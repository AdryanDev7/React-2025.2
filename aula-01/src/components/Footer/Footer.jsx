import styles from "./Footer.module.css";

export const Footer = () => {

  // new Date() pega a data atual, e o getFullYear() pega somente o ano, são funções nativas do próprio JavaScript
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
      Aluno <span className={styles.name}>Adryan Lima</span> -  Serratec {year} 
      </p>
    </footer>
  );
};