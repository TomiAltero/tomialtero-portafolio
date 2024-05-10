import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <div className={styles.items}>
      </div>
      <p className={styles.title}>Tomi Altero - Portafolio </p>
      <div className={styles.windowButtons}>
      </div>
    </section>
  );
};

export default Titlebar;
