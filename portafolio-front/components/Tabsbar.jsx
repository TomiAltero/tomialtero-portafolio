import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="inicio.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="sobre_mi.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contactame.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="proyectos.js" path="/projects" />
    </div>
  );
};

export default Tabsbar;
