import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {  useDeleteFollowerMutation } from '../../../app/services/followers';


const UnfollowButton = ({idVinculo}) => {
  const [deleteFollower] = useDeleteFollowerMutation(idVinculo)
  console.log(idVinculo,"idvinculo")
  
  const handleUnfollow = async () => {
      const res = await deleteFollower()
      console.log(res, "delete")
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