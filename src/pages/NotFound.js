import React from "react";

const NotFound = ({ msg }) => {
  return (
    <div className="h-screen text-center text-white text-7xl">
      Error 404 {msg}
    </div>
  );
};

export default NotFound;
