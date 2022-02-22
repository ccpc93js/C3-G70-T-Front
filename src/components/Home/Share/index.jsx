import React from "react";
import styles from "./Share.module.scss";
import { FaImage, FaLink } from "react-icons/fa";
import {
  Card,
  CardImg,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";

export default function Share() {
  return (
    <Card color="primary">
      <CardBody>
        <FormGroup className={styles.share}>
          <Label for="post">
            <CardImg
              src="https://randomuser.me/api/portraits/med/men/83.jpg"
              alt="avatar"
            />
          </Label>
          <Input
            className=""
            type="text"
            name="post"
            id="post"
            placeholder="Crear publicación"
          />
        </FormGroup>
        <ButtonGroup className={styles.btnGroup}>
          <Button color="primary">
            <FaImage /> Foto
          </Button>
          <Button color="primary">
            <FaLink /> Link
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}
