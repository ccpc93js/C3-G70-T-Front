import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../../app/services/posts";
import EditForm from "./EditForm";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetPostQuery(id);
  const [updatePost] = useUpdatePostMutation();

  const handleCancel = () => {
    navigate(`/post/${id}`);
  };

  const handleEdit = async (post) => {
    const creatingToast = toast.loading("Editando publicación...");

    const res = await updatePost({post, id});
    toast.dismiss(creatingToast);

    if (res.data.ok) {
      toast.success("Publicación editada correctamente");
      navigate(`/post`);
    } else {
      toast.error("Error al editar publicación");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div className="container pb-4">
      <EditForm
        postTitle={data.title}
        postDescription={data.description}
        postImage={data.image}
        handleCancel={handleCancel}
        handleEdit={handleEdit}
      />
    </div>
  );
}
