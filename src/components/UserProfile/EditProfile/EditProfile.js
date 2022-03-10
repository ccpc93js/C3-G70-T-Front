import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../app/services/users";

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

  return (
    <div className="container bg-white mt-3">
      <h1 className="text-dark">Editar tu informacion</h1>
      <form className="form-group" onSubmit={""}>
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
          <label htmlFor="title">Usuario</label>
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
          <label htmlFor="title">Nickname</label>
        </div>
        <div className="mb-3 input-group">
          <input
            className="form-control mb-1"
            id="fileid"
            name="fileid"
            type="file"
            accept="image/*"
            onChange={""}
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
        <button className="btn btn-success" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
