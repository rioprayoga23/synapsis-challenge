import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { usePosts } from "@/services/posts/queries";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const postsQuery = usePosts();

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
