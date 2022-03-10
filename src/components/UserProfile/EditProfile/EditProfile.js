import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../app/services/users";
import toast from "react-hot-toast";

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: userData } = useGetUserQuery(user.id);

  const [username, setUsername] = useState(userData.username);
  const [nickname, setNickname] = useState(userData.nickname);
  const [avatar, setAvatar] = useState("");
  const [bgImage, setBgImage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.files);
  const handleBgImageChange = (e) => setBgImage(e.target.files);

  console.log(userData);

  const handleSubmitEdit = async (e) => {
    if (!username || !nickname || !avatar || !bgImage) return;

    const creatingToast = toast.loading("Guardando informacion...");
  };

  return (
    <div className="container bg-white mt-3 rounded-3 p-2">
      <h1 className="text-dark">Editar tu informacion</h1>
      <form className="form-group" onSubmit={handleSubmitEdit}>
        <div className="mb-3 input-group">
          <div className="d-flex ">
            <img src={userData.backgroundImage} alt="" className="w-25" />
          </div>

          <label htmlFor="filebgid" className="text-dark mx-3">
            Imagen de portada
          </label>
          <input
            className="form-control mb-1"
            id="filebgid"
            name="filebgid"
            type="file"
            accept="image/*"
            onChange={handleBgImageChange}
            required
          />
        </div>
        <div className="mb-3 input-group">
          <label htmlFor="fileAvatarid" className="text-dark mx-3">
            Avatar
          </label>
          <input
            className="form-control mb-1"
            id="fileAvatarid"
            name="fileAvatarid"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            required
          />
          {/* <div className="d-flex ">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt=""
                        className={styles.modal__image}
                      />
                    )}
                  </div> */}
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            name="username"
            placeholder={userData.username}
            value={username}
            id="username"
            type="text"
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="title" className="text-white">
            Usuario
          </label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            name="nickname"
            placeholder={userData.nickname}
            value={nickname}
            id="nickname"
            onChange={handleNicknameChange}
            required
          ></textarea>
          <label htmlFor="title" className="text-white">
            Nickname
          </label>
        </div>

        <button className="btn btn-success align-items-end" type="submit">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
