import React from "react";
import { useLoginMutation } from "../../app/services/users";

export default function Test() {
  const [login, { loading, error }] = useLoginMutation();
  return (
    <div>
      <button onClick={() => login("blabla@hotmail.com")}>Login</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
}
