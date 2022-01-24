import React, { useContext } from "react";
import Interests from "./Interests";
import { UserContext } from "../context/user";

function Profile() {

  const {user} = useContext(UserContext);

  // now, we can use the user object just like we would if it was passed as a prop!
  
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}


export default Profile;
