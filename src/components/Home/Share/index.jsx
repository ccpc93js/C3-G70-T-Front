import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCreatePostMutation } from "../../../app/services/posts";
import { uploadImage } from "../../../app/services/images";
import toast from "react-hot-toast";
import styles from "./Share.module.scss";
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

export default function Share({ refetch }) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const user = useSelector((state) => state.auth.user);

  const [createPost] = useCreatePostMutation();

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

    const creatingToast = toast.loading("Creando publicación...");

    const imageUrl = await uploadImage(image);
    const post = {
      userid: user.id,
      title: title,
      description: textarea,
      image: imageUrl,
      likes: 0,
    };

    const res = await createPost(post);
    toast.dismiss(creatingToast);

    if (res.data.ok) {
      toast.success("Publicación creada correctamente");
      toggleModal();
      refetch();
    } else {
      toast.error("Error al crear publicación");
    }
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
