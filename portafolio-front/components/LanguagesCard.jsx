import React from "react";
import Image from "next/image";
import styles from "../styles/LanguagesCard.module.css";


const LanguageCard = ({ language }) => {
  return (
    <div className={styles.card}>
      <Image src={language.image} height={300} width={600} alt={language.name} />
      <div className={styles.content}>
        <h3>{language.name}</h3>
        <p>{language.description}</p>
        <div className={styles.tags}>
          {language.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;