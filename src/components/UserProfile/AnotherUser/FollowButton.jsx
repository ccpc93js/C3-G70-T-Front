import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCreateFollowerMutation } from '../../../app/services/followers';


const FollowButton = () => {
  const [createFollower] = useCreateFollowerMutation();
  const { id } = useParams();
  const actualUserId = useSelector((state) => state.auth.user.id);

  const handleFollow = async () => {
      const res = await createFollower({
        userid: id,
        followerID: actualUserId,
      });
      console.log("create follower")
      window.location.reload(false)
  };

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={handleFollow}
    >
    <AiOutlineHeart style={{ marginRight: "0.5rem" }} /> Seguir
    </button>
  )
}

export default FollowButton