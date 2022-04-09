import axios from "axios";
import React, { useState } from "react";

const AddNewPosts = ({ data, setData }) => {
  const [Username, setUsername] = useState("");
  const [PostText, setPostText] = useState("");
  const [Title, setTitle] = useState("");
  const AddPosts = () => {
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

    console.log(data);
    // setTitle("");
    // setPostText("");
    // setUsername("");
  };
  return (
    <div className="bg-transparent">
      <label htmlFor="my-modal" className="btn modal-button bg-red-400">
        Add new posts
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Title"
            value={Title}
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            value={Username}
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Post "
            value={PostText}
            className="input input-bordered input-sm w-full max-w-xs"
            onChange={(e) => setPostText(e.target.value)}
          />

          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Cancel
            </label>
            <button className="btn btn-primary" onClick={AddPosts}>
              Add new post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPosts;
