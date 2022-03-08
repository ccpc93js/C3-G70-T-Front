import React from "react";
import toast from "react-hot-toast";
import PubCard from "../Home/Feed/PubCard";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetPostQuery,
  useDeletePostMutation,
} from "../../app/services/posts";
import Spinner from "../Spinner";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

export default function Post() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(id);
  const [deletePost, { status }] = useDeletePostMutation();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error!</div>;

  const handleDelete = async () => {
    // ask for confirmation
    const confirmed = window.confirm(
      "¿Estás seguro de querer eliminar esta publicación?"
    );

    if (!confirmed) return;

    const { data } = await deletePost(id);
    if (data) {
      toast.success("Post deleted successfully");
      navigate("/");
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: "45rem" }}>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-info py-0 px-1"
          onClick={() => navigate(-1)}
          style={{ fontSize: "1.5rem" }}
        >
          <IoMdArrowRoundBack />
        </button>
        <button
          className="btn btn-danger py-0 px-1"
          onClick={handleDelete}
          style={{ fontSize: "1.5rem" }}
        >
          <AiFillDelete />
        </button>
      </div>
      <PubCard pub={data} />
    </div>
  );
}
