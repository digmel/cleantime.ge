import Link from "next/link";
import React from "react";
import { Logo, LogoMobile, MenuIcon } from "../icons";
import { Text } from "./Text";
import { Button } from "./Button";
import { usePlatform } from "../hooks";

export const Header = () => {
  const isMobile = usePlatform();

  return (
    <>
      {isMobile ? (
        <div className="bg-light py-5 px-6 flex justify-between items-center border-b border-blue-100 border-opacity-50">
          <LogoMobile />
          <div className="flex">
            <MenuIcon />
          </div>
        </div>
      ) : (
        <div className="bg-light py-3 px-48 flex justify-between items-center border-b border-blue-100 border-opacity-50">
          <div className="flex">
            <Logo />
          </div>

          <div className="md:flex flex-row items-center gap-12">
            <Link href="/">
              <Text variant="label">სერვისები</Text>
            </Link>

            <Link href="/">
              <Text variant="label">ჩვენს შესახებ</Text>
            </Link>

            <Button label="კონტაქტი" />
          </div>
        </div>
      )}
    </>
  );
};
