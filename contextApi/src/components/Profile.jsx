import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="m-5 p-3 text-2xl font-bold text-white bg-black rounded-xl h-96 w-1/2 flex items-center justify-center">
        Please Login!
      </div>
    );

  return (
    <div className="m-5 p-3 text-2xl font-bold text-white bg-black rounded-xl w-1/2 h-96 flex items-center justify-center">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
