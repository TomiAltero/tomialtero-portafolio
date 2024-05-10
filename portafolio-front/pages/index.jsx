import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import ImageHomePage from '../components/ImageHomePage';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Tomi Altero</h1>
            <h6 className={styles.bio}>Desarrollador Back-End</h6>
            <Link href="/projects">
              <button className={styles.button}>Ver Proyectos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contactame</button>
            </Link>
          </div>
          <ImageHomePage />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}