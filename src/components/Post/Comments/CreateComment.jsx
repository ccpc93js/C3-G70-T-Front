import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useCreateCommentMutation } from "../../../app/services/comments";

export default function CreateComment({ id }) {
  const actualUser = useSelector((state) => state.auth.user);
  const [comment, setComment] = useState("");
  const [createComment] = useCreateCommentMutation();

  const hadleSubmit = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creando comentario...");

    const commentData = {
      postid: id,
      userid: actualUser.id,
      comment,
    };
    const res = createComment(commentData);
    toast.dismiss(loadingToast);
    toast.success("Comentario creado!");
    setComment("");
  };

  return (
    <form className="form-group" onSubmit={hadleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Comentario"
          aria-label="Comentario"
          aria-describedby="comentar"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" id="comentar">
          Comentar
        </button>
      </div>
    </form>
  );
}
