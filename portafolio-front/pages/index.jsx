import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import ImageHomePage from '../components/ImageHomePage';
import ShowPortafolio from '../components/TestConnection';


export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Tomi Altero</h1>
            <h6 className={styles.bio}>Desarrollador Full-Stack</h6>
            <p className={styles.paragraphindex}>Hola! Soy un desarrollador Full-Stack independiente en 🇦🇷 </p>
            <Link href="/projects">
              <button className={styles.button}>Ver Proyectos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contactame</button>
            </Link>
          </div>
          <ImageHomePage />
          <ShowPortafolio />
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
