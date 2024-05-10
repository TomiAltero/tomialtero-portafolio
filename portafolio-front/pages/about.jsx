import React from "react";
import { getLanguages } from "./api/languages";
import AboutText from "../components/AboutText";
import LanguageCard from "../components/LanguagesCard";
import style from "../styles/AboutPage.module.css";


const AboutPage = ({ languages }) => {
  return (
    <>
      <h3>Sobre mí:</h3>
      <AboutText />
      
      <h3 className={style.h3lang}>Lenguajes con los que he desarrollado:</h3>
      <div className={style.container}>
        {languages.map((language) => (
          <LanguageCard key={language.id} language={language} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const languages = getLanguages();
  return {
    props: { title: "About", languages },
  };
}

export default AboutPage;
