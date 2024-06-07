// components/Footer.js
import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © Copyright <strong>Akesyha</strong>. All Rights Reserved
      </div>
      <div className={styles.links}>
        <a href="#">Terms and conditions</a>
        <a href="#">Refund policy</a>
        <a href="#">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
