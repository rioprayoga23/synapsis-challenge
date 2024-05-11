import { IRootState } from "@/store";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import DrawerModal from "./Drawer";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";

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
