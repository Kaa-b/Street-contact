import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.content}>Bas de page avec des trucs</p>
      </div>
    </footer>
  );
};

export default Footer;