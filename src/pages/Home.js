import React from "react";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import loading1 from "../img/loading.svg";
// import imoji from "../img/imoji 1png.png";

import DataPosts from "../components/DataPosts";
// import AddNewPosts from "../components/AddNewPosts";
const Home = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      axios.get("http://localhost:3001/posts").then((response) => {
        // var dataFinder = response.data.filter((i) => i.id !== 3);
        // console.log(dataFinder);
        if (mounted) {
          setData(response.data);
          console.log(response.data);
        }
      });
    }, 1000);
    return () => (mounted = false);
  }, []);
  // if data = 0
  // if (data === false) {
  //   return (
  //     <div className="text-white text-5xl min-h-screen flex justify-center text-center font-bold">
  //       <span>Express Server's Not running</span>
  //       <img className="h-14 w-14" src={imoji} alt="" />
  //     </div>
  //   );
  // } else {
  // if data > 0
  return (
    <div className="grid justify-center text-4xl w-full h-fit min-h-screen ">
      {/* <h1 className=" text-center font-mono">Mimobook</h1> */}

      {/* <div className="flex justify-center">
          <AddNewPosts data={data} setData={setData} />
        </div> */}
      <div className="py-10">
        {data ? (
          <DataPosts data={data} setData={setData} />
        ) : (
          <img src={loading1} alt="ll" />
        )}
      </div>
    </div>
  );
  // }
};

export default Home;
