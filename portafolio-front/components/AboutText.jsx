import React from "react";

function AboutText() {
  return (
    <div
      style={{
        backgroundColor: "#1F2428",
        padding: "20px",
        borderRadius: "10px",
        margin: 20,
      }}
    >
      <p style={{ fontSize: "18px", color: "white" }}>
        Soy un desarrollador Back-End que comenzé hace 3 años y me encanta
        aprender cosas nuevas. Me apasiona la programación y la tecnología, y
        disfruto compartiendo mis conocimientos con los demás.
      </p>
      <br></br>
      <p>Estoy familiarizado con:</p>
      <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
        <li style={{ color: "white" }}>
          🔥 Lenguajes de programación como: JAVA, Python, JavaScript y PHP.
        </li>
        <li style={{ color: "white" }}>
          🌐 Desarrollo de aplicaciones web con HTML, CSS y JavaScript.
        </li>
        <li style={{ color: "white" }}>
          📚 Frameworks como Bootstrap, React.js, TailwindCSS, Django y Laravel.
        </li>
        <li style={{ color: "white" }}>🛠️ Herramientas como Git y GitHub.</li>
      </ul>

      <br></br>

      <p>Actualmente estoy:</p>
      <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
        <li style={{ color: "white" }}>🌱 Aprendiendo Node.js y MongoDB.</li>
        <li style={{ color: "white" }}>
          👯 Buscando colaborar en proyectos de desarrollo web.
        </li>
        <li style={{ color: "white" }}>
          💬 Dispuesto a ayudar en cualquier pregunta que tengas.
        </li>
      </ul>
    </div>
  );
}

export default AboutText;
