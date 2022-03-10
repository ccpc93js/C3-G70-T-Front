import React, { useState } from "react";

export default function EditForm({ postTitle, postDescription, postImage, handleCancel }) {
  const [title, setTitle] = useState(postTitle);
  const [textarea, setTextarea] = useState(postDescription);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState(postImage);

  const handleEdit = () => {
    console.log("Editando");
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "textarea") {
      setTextarea(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form
      className="form-group mx-auto m-4"
      onSubmit={handleEdit}
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
          className="form-control mb-1"
          id="fileid"
          name="fileid"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <div className="d-flex ">
          {imageUrl && <img src={imageUrl} alt="" />}
        </div>
      </div>
      <button className="btn btn-info me-2" type="button" onClick={handleCancel}>
        Cancelar
      </button>
      <button className="btn btn-warning" type="submit">
        Guardar
      </button>
    </form>
  );
}
