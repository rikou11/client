import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentsSection = ({ id }) => {
  const postId = id;
  const [Comments, setComments] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${postId}`).then((response) => {
      console.log(response.data);
      setComments(response.data);
    });
  }, [postId]);
  if (Comments.length === 0) {
    return (
      <div className=" lg:w-[450px]  py-12 card-body  bg-white ">
        <h1 className="text-red-600 flex h-fit text-left font-bold text-3xl ">
          <span> Comments</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </span>
        </h1>
        <span className=" w-4/5 h-fit flex justify-between  px-4 py-2 rounded-bl-none rounded-xl shadow-md  text-left bg-gray-100  border-b-2 ">
          No comments yet..
        </span>
      </div>
    );
  }
  return (
    <div className=" lg:w-[450px] lg:max-h-[600px] card-body py-12   bg-white  ">
      <h1 className="text-red-600 bg-transparent  w-fit  bg-white flex text-left font-bold text-3xl ">
        <span> Comments</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </span>
      </h1>
      <ul className="grid grid-cols-1  overflow-auto gap-3 pt-4 ">
        {Comments.map((i, key) => {
          return (
            <li
              key={key}
              className=" w-4/5  flex justify-between hover:scale-105  transition duration-200  px-4 py-2 rounded-bl-none rounded-xl shadow-md  text-left bg-gray-100 hover:bg-violet-100 border-b-2 "
            >
              <span> {i.CommentsBody}</span>
              <div className="hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  hover:scale-125  transition duration-200  rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </li>
          );
        })}{" "}
      </ul>
      <h1 className="   bg-white  text-left  ">
        <label className="label">
          <span className="label-text">Comment here </span>
        </label>
        <div className="grid grid-cols-2 gap-3  ">
          {" "}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered  w-[190px]"
          />
          <div className="">
            <button className=" py-3 px-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700  ">
              Submit
            </button>
          </div>
        </div>{" "}
      </h1>
    </div>
  );
};

export default CommentsSection;
