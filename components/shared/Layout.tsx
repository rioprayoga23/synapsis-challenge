import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useAllPosts } from "@/services/posts/queries";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const postsQuery = useAllPosts();

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
