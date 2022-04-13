// import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DataPosts = ({ data, setData }) => {
  const DeletePost = (i) => {
    // axios
    //   .delete("http://localhost:3001/posts/delete", {
    //     id: i.id,
    //   })
    //   .then(console.log("data deleted successfuly!", data, i));
    // const filtredData = data.filter((index) => index.id !== i.id);
    // setData(filtredData);
  };

  const Navigate = useNavigate();
  return (
    <div className="bg-trasparent ">
      {data && (
        <ul className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((i, index) => {
            return (
              <li key={index} className="  ">
                <div className="card w-96 bg-white  shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-2xl text-red-600 font-bold">
                      {i.title}
                    </h2>
                    <h3 className="card-title font-thin text-base text-gray-600">
                      <img
                        src="https://images.unsplash.com/photo-1649449243291-e9c7139ae827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3776&q=80"
                        alt=""
                        className="rounded-full w-8  h-8"
                      />{" "}
                      <span> {i.username}</span>
                    </h3>
                    <p className="text-base text-left text-gray-900">
                      <span className="text-red-500">{i.postText} </span>
                    </p>
                    <span className="text-[8px] grid grid-cols-1 text-gray-900">
                      <>
                        {/*navigation  */}
                        <button
                          onClick={() => Navigate(`post/${i.id}`)}
                          className="text-sm hover:text-violet-500 grid grid-cols-2 transition duration-100 w-fit font-bold text-gray-400 hover:underline decoration-2 hover:decoration-violet-600 "
                        >
                          <span>See more...</span>
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
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </button>
                      </>
                      <div className="flex justify-between">
                        <span>{i.createdAt ? i.createdAt : ""}</span>

                        <>
                          <button
                            onClick={DeletePost(i)}
                            className="bg-gray-400 shadow-2xl  flex py-2 px-2  rounded-full  hover:bg-gray-500 transition duration-150  text-white"
                          >
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
                      </div>
                    </span>
                  </div>

                  <p className="text-xs"></p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex justify-center">
        {" "}
        <div className="btn-group">
          <button className="btn btn-active">1</button>
          <button className="btn ">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
        </div>
      </div>
    </div>
  );
};

export default DataPosts;
