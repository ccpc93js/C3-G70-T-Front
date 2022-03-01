import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import styles from "./Aside.module.scss";

export default function Aside() {
  return (
    <div className="sticky-top">
      <Card className={styles.card}>
        <CardBody className="d-flex flex-column align-items-center pb-0">
          <CardText className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardText>
          <p>Acerca de</p>
          <p>Contacto</p>
        </CardBody>
        <CardText className="text-center">
          <p>
            InGamers © 2022
            <br />
            Todos los derechos reservados
          </p>
        </CardText>
      </Card>
    </div>
  );
}
