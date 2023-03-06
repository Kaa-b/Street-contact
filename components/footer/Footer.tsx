import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.footerContent}>Bas de page avec des trucs</p>
      </div>
    </footer>
  );
};

export default Footer;