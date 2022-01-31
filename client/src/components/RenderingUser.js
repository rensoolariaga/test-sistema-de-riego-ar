import React from "react";
import Card from "./Card.js";

export default function RenderingUser({ pageProjects }) {
  return (
    <ul>
      {pageProjects.map((project) => (
        <li key={project.id}>
          <Card
            title={project.title}
            image={project.image}
            parragraph={project.parragraph}
            proyectType={project.proyectType}
            id={project.id}
            file={project.file}
          />
        </li>
      ))}
    </ul>
  );
}