import React from "react";
import Profile from "./Profile";

const Author = ({ name }: { name: string }) => {
  return (
    <div className="wrap-profile">
      <p className="author">Author</p>
      <div className="divider" />
      <Profile name={name} />
    </div>
  );
};

export default Author;
