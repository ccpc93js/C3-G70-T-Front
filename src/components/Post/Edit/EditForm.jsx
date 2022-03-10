import React, { useState, useEffect } from "react";
import { uploadImage } from "../../../app/services/images";

export default function EditForm({
  postTitle,
  postDescription,
  postImage,
  handleCancel,
  handleEdit,
}) {
  const [title, setTitle] = useState(postTitle);
  const [textarea, setTextarea] = useState(postDescription);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState(postImage);

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

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "textarea") {
      setTextarea(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !textarea) return;

    const imageURI = image ? await uploadImage(image) : imageUrl;

    console.log(imageURI);

    handleEdit({
      title,
      description: textarea,
      image: imageURI,
    });
  };

  return (
    <form
      className="form-group mx-auto m-4"
      onSubmit={handleSubmit}
      style={{ maxWidth: "30rem" }}
    >
      <div className="form-floating mb-3">
        <input
          className="form-control"
          name="title"
          placeholder="Titulo"
          id="title"
          type="text"
          onChange={handleChange}
          value={title}
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
          onChange={handleChange}
          value={textarea}
          style={{ height: "8rem" }}
          required
        ></textarea>
        <label htmlFor="title">Descripción</label>
      </div>
      <div className="mb-3 input-group">
        <input
          className="form-control mb-1 w-100"
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          
          
        />
        <div className="d-flex w-100">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="description"
              width="80%"
              className="mx-auto"
            />
          )}
        </div>
      </div>
      <button
        className="btn btn-info me-2"
        type="button"
        onClick={handleCancel}
      >
        Cancelar
      </button>
      <button className="btn btn-warning" type="submit">
        Guardar
      </button>
    </form>
  );
}
