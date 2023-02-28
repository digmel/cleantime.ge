import React from "react";
import { Logo, PhoneIcon } from "../icons";

export const Header = () => {
  return (
    <div className="bg-light py-2 md:px-32 flex md:justify-between justify-center border-b border-dark-100 border-opacity-10">
      <div className="flex w-40">
        <Logo />
      </div>

      <div className="md:flex flex-row md:items-center md:w-40 hidden md:visible text-primary">
        <PhoneIcon />
        <h1 className="font-extralight ml-2">599 945 200</h1>
      </div>
    </div>
  );
};
