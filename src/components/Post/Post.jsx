import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import PubCard from "../Home/Feed/PubCard";
import Comments from "./Comments";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  useGetPostQuery,
  useDeletePostMutation,
} from "../../app/services/posts";

export default function Post() {
  const { id } = useParams();
  const currentUserId = useSelector((state) => state.auth.user.id);
  const { data, isLoading, isError } = useGetPostQuery(id);
  const [deletePost] = useDeletePostMutation();
  const [canEdit, setCanEdit] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (currentUserId === data?.user.userid) {
      setCanEdit(true);
    }
  }, [currentUserId, data]); // eslint-disable-lineI

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

  const handleShowComments = () => {
    setShowComments(!showComments);
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
        {canEdit && (
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
        )}
      </div>
      <div className="">
        <PubCard pub={data} />
      </div>
      {/* <Comments id={id} show={showComments} /> */}
    </div>
  );
}
