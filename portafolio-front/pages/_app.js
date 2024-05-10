import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import "../styles/ImageHomePage.css"; // Importa el archivo CSS aquí


class MyApp extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Head title={`Tomi Altero | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
