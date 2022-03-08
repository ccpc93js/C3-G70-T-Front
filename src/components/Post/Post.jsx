import React from "react";
import PubCard from "../Home/Feed/PubCard";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPostQuery } from "../../app/services/posts";
import Spinner from "../Spinner";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Post() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(id);

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (isError) return <div>Error!</div>;

  return (
    <div className="container my-4" style={{ maxWidth: "45rem" }}>
      <button
        className="btn btn-info py-0 px-1"
        onClick={() => navigate(-1)}
        style={{ fontSize: "1.5rem" }}
      >
        <IoMdArrowRoundBack />
      </button>
      <PubCard pub={data} />
    </div>
  );
}
