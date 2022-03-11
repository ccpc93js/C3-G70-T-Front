import React from "react";
import Comment from "./Comment";

export default function Comments() {
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Button with data-bs-target
      </button>
      <div className="collapse" id="collapseExample">
        <Comment />
      </div>
    </>
  );
}
