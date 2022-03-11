import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {  useDeleteFollowerMutation } from '../../../app/services/followers';


const UnfollowButton = ({idVinculo}) => {
  const [deleteFollower] = useDeleteFollowerMutation()

  const handleUnfollow = async () => {
      const res = await deleteFollower(idVinculo)
      console.log("unfollower done")
      window.location.reload(false)
  };

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={handleUnfollow}
    >
    <AiFillHeart style={{ marginRight: "0.5rem" }}/>Dejar de seguir
    </button>
  )
}

export default UnfollowButton