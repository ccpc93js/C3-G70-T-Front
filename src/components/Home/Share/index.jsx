import React from "react";
import styles from "./Share.module.scss";
import {
  Card,
  CardImg,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function Share() {
  return (
    <Card color="info">
      <CardBody>
        <FormGroup className={styles.formGroup}>
          <Label for="post">
            <CardImg
              src="https://randomuser.me/api/portraits/med/men/83.jpg"
              alt="avatar"
            />
          </Label>
          <Input
            type="text"
            name="post"
            id="post"
            placeholder="Crear publicación"
          />
        </FormGroup>

        <Button>Share</Button>
      </CardBody>
    </Card>
  );
}
