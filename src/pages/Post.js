import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const obj = { id };
  const post = [
    {
      username: "Nan!",
      title: "Nan!",
      postText: "Nan!",
      id: "zazaza",
      createdAt: "Nan!",
    },
  ];
  var result = "";
  // eslint-disable-next-line array-callback-return
  post.map((i) => {
    // eslint-disable-next-line eqeqeq
    if (i.id == obj.id) {
      return (result = i);
    } else {
      return (result = i);
    }
  });

  return (
    <div className="h-screen flex justify-center py-28">
      <div className="card w-[900px] h-[450px]  bg-white  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl text-red-600 font-bold">
            {result.title}
          </h2>
          <h3 className="card-title font-thin text-base text-gray-600">
            <img
              src="https://images.unsplash.com/photo-1649449243291-e9c7139ae827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3776&q=80"
              alt=""
              className="rounded-full w-8  h-8"
            />{" "}
            <span> {result.username}</span>
          </h3>
          <p className="text-base text-left text-gray-900">
            <span className="text-red-500">{result.postText} </span>
          </p>
          <span className="text-[8px] flex justify-between text-gray-900">
            <span>{result.createdAt ? result.createdAt : ""}</span>{" "}
            <>
              <button className="bg-gray-400 shadow-2xl  flex py-2 px-2  rounded-full  hover:bg-gray-500 transition duration-150  text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </>
          </span>
        </div>

        <p className="text-xs"></p>
      </div>
    </div>
  );
};

export default Post;
