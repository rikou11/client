import axios from "axios";
import React, { useState } from "react";
import checkMark from "../img/white loading.svg";
const CreatePost = () => {
  const [Username, setUsername] = useState("");
  const [PostText, setPostText] = useState("");
  const [Title, setTitle] = useState("");
  const [Success, setSuccess] = useState(false);
  const [CheckMark, setCheckMark] = useState(false);
  const AddPosts = () => {
    setSuccess(true);
    setTimeout(() => {
      axios
        .post("http://localhost:3001/posts", {
          title: Title,
          postText: PostText,
          username: Username,
        })
        .then(console.log("data inserted successfuly to database!"));
      // setData([...data], {
      //   id: Math.random(),
      //   title: Title,
      //   postText: PostText,
      //   username: Username,
      //   createdAt: "just now",
      //   updatedAt: "k;lk;",
      // });

      setTitle("");
      setPostText("");
      setUsername("");
      setSuccess(false);
      setCheckMark(true);
      setTimeout(() => {
        setCheckMark(false);
      }, 2000);
    }, 1000);
  };
  return (
    <div className="min-h-96 py-[158px] ">
      <div className=" flex justify-center  ">
        <div className="grid grid-cols-1 gap-7  ">
          <input
            type="text"
            placeholder="Title"
            value={Title}
            className="input input-bordered input-primary w-80 xs:w-56"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            value={Username}
            className="input input-bordered input-primary  w-80 xs:w-56"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Post "
            value={PostText}
            className="input input-bordered input-primary  w-80 xs:w-56"
            onChange={(e) => setPostText(e.target.value)}
          />

          <button className="btn btn-primary" onClick={AddPosts}>
            {CheckMark ? (
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            ) : Success ? (
              <img className="h-10 w-10" src={checkMark} alt="" />
            ) : (
              <span className="">Add new post</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
