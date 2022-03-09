import { useGetUserQuery } from "../../app/services/users";

export default function Avatar({ id }) {
  const { data } = useGetUserQuery(id);

  if (!data?.avatar)
    return (
      <img
        src={`https://avatars.dicebear.com/api/pixel-art-neutral/${id}.svg`}
        className="rounded-circle"
        width="50"
        alt="avatar"
      />
    );
  return (
    <img src={data.avatar} className="rounded-circle" width="50" alt="avatar" />
  );
}
