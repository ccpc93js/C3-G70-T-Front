import React, { useState, useEffect } from "react";
import { useCreatePostMutation } from "../../../app/services/posts";
import { uploadImage } from "../../../app/services/images";
import styles from "./Share.module.scss";
import { BiImageAdd } from "react-icons/bi";
import {
  Card,
  CardImg,
  CardBody,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

export default function Share() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPost, { status, isError, isLoading, isSuccess }] =
    useCreatePostMutation();

  useEffect(() => {
    async function getImageUrl() {
      if (image) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onload = () => {
          setImageUrl(fileReader.result);
        };
      }
    }
    getImageUrl();
  }, [image]);

  const toggleModal = () => setModal(!modal);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextarea = (e) => setTextarea(e.target.value);
  const handleImage = (e) => setImage(...e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !textarea || !image) return;

    //post format
    // const post = {
    //   userid: "3",
    //   title: "Mira mi ultima jugada",
    //   description:
    //     "Estaba jugando con @juanito y de repente se me aparecio esto:",
    //   image: "https://picsum.photos/id/1/200/300",
    //   likes: 654,
    // };

    const imageUrl = await uploadImage(image);

    console.log(textarea, image);
    const post = {
      userid: 3,
      title: title,
      description: textarea,
      image: imageUrl,
      likes: 0,
    };

    console.log(post);

    const res = await createPost(post);

    console.log(res);
  };

  return (
    <Card className={styles.card}>
      <CardBody>
        <FormGroup className={styles.share}>
          <Label htmlFor="post">
            <CardImg
              src="https://randomuser.me/api/portraits/med/men/83.jpg"
              alt="avatar"
            />
          </Label>
          <Button
            className="btn-outline-Primary"
            type="button"
            onClick={toggleModal}
          >
            Crear publicacion
          </Button>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            modalTransition={{ timeout: 500 }}
            size="md"
          >
            <ModalHeader toggle={toggleModal}>
              Crear una publicacion
            </ModalHeader>
            <ModalBody>
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="title"
                    placeholder="Titulo"
                    id="title"
                    type="text"
                    onChange={handleTitleChange}
                    required
                  />
                  <label htmlFor="title">Titulo</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="textarea"
                    placeholder="Descripcion"
                    id="textarea"
                    onChange={handleTextarea}
                    required
                  ></textarea>
                  <label htmlFor="title">Descripción</label>
                </div>
                <div className="mb-3 input-group">
                  <input
                    className="form-control mb-1"
                    id="fileid"
                    name="fileid"
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    required
                  />
                  <div className="d-flex ">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt=""
                        className={styles.modal__image}
                      />
                    )}
                  </div>
                </div>
                <button className="btn btn-success" type="submit">
                  Publicar
                </button>
              </form>
            </ModalBody>
          </Modal>
        </FormGroup>
      </CardBody>
    </Card>
  );
}
