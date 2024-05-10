import React from "react";
import Image from "next/image";
import styles from "../styles/LanguagesCard.module.css";


const LanguageCard = ({ language }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{language.name}</h3>
        <h4>Experiencia: {language.experience}</h4>
        <p>{language.description}</p>
      </div>
    </div>
  );
};

export default LanguageCard;