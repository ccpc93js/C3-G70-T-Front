import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import styles from "./Aside.module.scss";

export default function Aside() {
  return (
    <div className="sticky-top">
      <Card className={styles.card}>
        <CardBody className="d-flex flex-column align-items-center pb-0">
          <CardText className="text-center">
            InGamers es una comunidad de gamers en la que compartir contenido y
            poder interactuar con otros jugadores.
          </CardText>

          <a
            className="nav-link"
            href="https://www.linkedin.com/in/cristian-camilo-palomeque-caseres-14b519201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cristian Palomeque
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/a-pedrosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alejandro Pedrosa
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/mauricionromero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mauricio Romero
          </a>
        </CardBody>
        <CardText className="text-center">InGamers © 2022</CardText>
      </Card>
    </div>
  );
}
