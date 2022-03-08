import { useGetUserQuery } from "../../app/services/users";
import { FcWebcam } from "react-icons/fc";

export default function Avatar({ id }) {
  const { data } = useGetUserQuery(id);

  if (!data) return <FcWebcam style={{ fontSize: "2.5rem" }} />;
  return (
    <img src={data.avatar} className="rounded-circle" width="50" alt="avatar" />
  );
}
