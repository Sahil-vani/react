import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function User() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Sahil-vani")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl flex items-center justify-center p-4 my-4 flex-col">
        Github Followers: {data.followers}
        <img
          src={data.avatar_url}
          alt="git profile"
          width={300}
          className="m-5 rounded-md"
        />
      </div>
    </>
  );
}

export default User;

export const gitHubInfoLoder = async () => {
  const response = await fetch("https://api.github.com/users/Sahil-vani");

  return response.json();
};
