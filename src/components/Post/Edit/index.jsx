import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div className="container">
      <EditForm
        postTitle={data.title}
        postDescription={data.description}
        postImage={data.image}
        handleCancel={handleCancel}
      />
    </div>
  );
}
