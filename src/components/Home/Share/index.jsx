import React, {useState} from "react";
import styles from "./Share.module.scss";
import { FaImage, FaLink } from "react-icons/fa";
import {BiImageAdd} from "react-icons/bi"
import {
  Card,
  CardImg,
  CardBody,
  FormGroup,
  Label,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function Share() {
  const [modal, setModal] = useState(false)
  const toggleModal = () =>setModal(!modal)
  
  

  const [textarea, setTextarea] = useState("")

  const [image, setImage] = useState("")

  const handleTextarea = (e) =>{
    setTextarea(e.target.value);
  }

  const handleImage = (e) =>{
    setImage(...e.target.files)
  }


  return (
    <Card className={styles.card}>
      <CardBody>
        <FormGroup className={styles.share}>
          <Label for="post">
            <CardImg
              src="https://randomuser.me/api/portraits/med/men/83.jpg"
              alt="avatar"
            />
          </Label>
          <Button className="btn-outline-Primary" type="button" onClick={toggleModal}>
            Crear publicacion
          </Button>
          <Modal isOpen={modal} toggle={toggleModal} modalTransition={{ timeout: 500 }} size="md">
            <ModalHeader toggle={toggleModal} >
              Crear una publicacion
            </ModalHeader>
            <ModalBody >
              <textarea className="rounded-3 w-100" placeholder="¿Que quieres contar?" id="textarea" onChange={handleTextarea}></textarea>
              <input id='fileid' type='file' hidden accept="image/*"  onChange={handleImage}/>
              <div className="d-flex justify-content-end">
              <label for="fileid" id="LblBrowse" style={{fontSize:"2rem", width:"2.5rem"}}>
                <BiImageAdd />
              </label>
              </div>
              <div className="">
                <img src={image.name} alt=""/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className="btn btn-success" type="button">Publicar</Button>
            </ModalFooter>
          </Modal>
        </FormGroup>
        <ButtonGroup className={styles.btnGroup}>
          <Button color="primary" onClick={toggleModal}>
            <FaImage /> Foto
          </Button>
          <Button color="primary" onClick={toggleModal}>
            <FaLink /> Link
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}
