import { Link } from "react-router-dom";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <article className={styles.footerLeft}>
          <a href="/" target="_blank" className={styles.contribute}>
            Contribute to LoadCast
          </a>
          <div className={styles.footerLeftSociallinks}>
            <a loading="lazy" href="/" target="_blank" rel="noreferrer">
              <FiGithub className={styles.icons} />
            </a>

            <a loading="lazy" href="/" target="_blank" rel="noreferrer">
              <FaLinkedin className={styles.icons} />
            </a>

            <a loading="lazy" href="/" target="_blank" rel="noreferrer">
              <FiTwitter className={styles.icons} />
            </a>
          </div>
        </article>
        <article className={styles.footerCenter}>
          <Link to="/" className={styles.footerLink}>
            Home
          </Link>
          <Link to="/dashboard" className={styles.footerLink}>
            Dashboard
          </Link>
        </article>
        <article className={styles.footerRight}>
          <Link to="/models" className={styles.footerLink}>
            Models
          </Link>
          <Link to="/about" className={styles.footerLink}>
            About Us
          </Link>
        </article>
      </section>
      <p className={styles.footerCopyright}>
        Copyright &copy; 2024. All Rights Reserved
      </p>
    </footer>
  );
};

export { Footer };
