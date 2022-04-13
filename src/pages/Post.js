import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentsSection from "../components/CommentsSection";
import NotFound from "./NotFound";

const Post = () => {
  const [Post, setPost] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      if (response) {
        console.log(response.data);
        setPost(response.data);
      } else {
        setPost(false);
      }
    });
  }, [id]);
  if (!Post) {
    return (
      <div className="font-oxygen">
        <NotFound msg={`this post doesn't exist`} />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex justify-center py-28">
      <div className="card w-[300px] grid grid-cols-1 md:w-[700px] xl:w-[900px]   bg-white md:grid md:grid-cols-2 gap-4 shadow-xl">
        <div className="card-body ">
          <h1>
            <button
              className="text-gray-400 hover:text-gray-500 transition duration-200 "
              onClick={() => Navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </h1>
          <h2 className="card-title text-2xl text-red-600 font-bold">
            {Post.title}
          </h2>
          <h3 className="card-title font-thin text-base text-gray-600">
            <img
              src="https://images.unsplash.com/photo-1649449243291-e9c7139ae827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3776&q=80"
              alt=""
              className="rounded-full w-8  h-8"
            />{" "}
            <span> {Post.username}</span>
          </h3>
          <p className="text-base text-left text-gray-900">
            <span className="text-gray-700">
              {Post.postText} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quidem repellendus optio deleniti, molestiae quo
              nesciunt, voluptatum, obcaecati illo nam laboriosam perferendis
              quam maxime iure! Mollitia ducimus minima illo. In magnam
              temporibus cupiditate sunt odio? Velit nihil quam ducimus
              laboriosam perspiciatis?{" "}
            </span>
          </p>
          <span className="text-[8px] flex justify-between text-gray-900">
            <span>{Post.createdAt ? Post.createdAt : ""}</span>{" "}
          </span>
        </div>
        <>
          {" "}
          <CommentsSection id={id} />
        </>
      </div>
    </div>
  );
};

export default Post;
