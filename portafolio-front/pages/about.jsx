import React from 'react';
import AboutText from '../components/AboutText'; 

const AboutPage = () => {
  return (
    <>
      <h3>Sobre mi:</h3>
      <AboutText />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
