import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type TLayout = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: TLayout) => {
  return (
    <div className=" bg-light md:min-h-screen w-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-initial w-screen pb-4 fixed z-10">
        <Header />
      </div>

      <div className="flex-grow w-screen overflow-visible">{children}</div>

      <div className="flex-initial w-screen md:mt-56 mt-48">
        <Footer />
      </div>
    </div>
  );
};
