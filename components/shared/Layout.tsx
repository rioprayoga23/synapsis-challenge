import { IRootState } from "@/store";
import React from "react";
// import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import DrawerModal from "./Drawer";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: IRootState) => state.screenLoading);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Navbar />
      <main>{children}</main>

      <DrawerModal />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
