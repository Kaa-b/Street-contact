import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <p className={styles.footerContent}>Bas de page avec des trucs</p>
            </div>
        </div>
    )
};

export default Footer;