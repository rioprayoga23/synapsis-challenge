import { IRootState } from "@/store";
import React from "react";
// import { Toaster } from "react-hot-toast";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import DrawerModal from "./Drawer";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Head from "next/head";

const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: IRootState) => state.screenLoading);
  const { data } = useSelector((state: IRootState) => state.meta);

  return (
    <>
      <NextSeo
        title={data?.title}
        description={data?.description}
        canonical={data?.canonical}
        openGraph={{
          type: "website",
          siteName: "synapsis.id - connect everything",
          title: data?.title,
          description: data?.description,
          images: [
            {
              url:
                data?.ogImage ||
                "https://synapsis.id/wp-content/uploads/2022/09/syn-favicon.png",
              secureUrl:
                data?.ogImage ||
                "https://synapsis.id/wp-content/uploads/2022/09/syn-favicon.png",
              width: 354,
              height: 354,
            },
          ],
        }}
      />

      {isLoading && <LoadingScreen />}

      <Navbar />
      <main>{children}</main>

      <DrawerModal />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
