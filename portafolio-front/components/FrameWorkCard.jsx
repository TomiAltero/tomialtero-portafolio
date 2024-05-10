import React from "react";


const FrameWorkCard = ({ framework }) => {
    return (
        <div className="card">
        <div className="content">
            <h3>{framework.name}</h3>
            <h4>Experiencia: {framework.experience}</h4>
            <p>{framework.description}</p>
        </div>
        </div>
    );
    }