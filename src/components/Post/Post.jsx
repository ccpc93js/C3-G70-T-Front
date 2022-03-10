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
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Post() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(id);
  const [deletePost] = useDeletePostMutation();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error!</div>;

  const handleDelete = async () => {
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

  const handleEdit = () => {
    navigate(`/edit/${id}`);
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
        <div className="d-flex gap-3">
          <button
            className="btn btn-warning py-0 px-1"
            onClick={handleEdit}
            style={{ fontSize: "1.5rem" }}
          >
            <AiFillEdit />
          </button>
          <button
            className="btn btn-danger py-0 px-1"
            onClick={handleDelete}
            style={{ fontSize: "1.5rem" }}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className="pb-5">
        <PubCard pub={data} />
      </div>
    </div>
  );
}
