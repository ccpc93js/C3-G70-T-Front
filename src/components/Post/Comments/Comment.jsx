import React from "react";
import Avatar from "../../Avatar";
import { Link } from "react-router-dom";

export default function Comment({ comment }) {
  const { username, comment: bodyComent } = comment;
  return (
    <div className="card mb-3">
      <div className="d-flex flex-row">
        <Avatar id={comment.userid} />
        <Link to={`/user/${comment.userid}`} className="w-100">
          <div className="card-header w-100">{username}</div>
        </Link>
      </div>
      <div className="card-body">
        <p className="card-text">{bodyComent}</p>
      </div>
    </div>
  );
}
