import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { useGetCommentsQuery } from "../../../app/services/comments";
import { Collapse } from "reactstrap";

export default function Comments({ showComments, id }) {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useGetCommentsQuery(id);

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);
  return (
    <Collapse isOpen={showComments}>
      <CreateComment id={id} />
      {loading && <p>Cargando...</p>}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Collapse>
  );
}
