import Link from "next/link";
import React from "react";
import { Logo, LogoMobile, MenuIcon } from "../icons";
import { Text } from "./Text";
import { Button } from "./Button";
import { usePlatform } from "../hooks";
import { useRouter } from "next/router";

export const Header = () => {
  const isMobile = usePlatform();
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <>
      {isMobile ? (
        <div className="bg-light py-5 px-6 flex justify-between items-center border-b border-blue-100 border-opacity-50">
          <a className="flex hover:opacity-70" onClick={goHome}>
            <LogoMobile />
          </a>
          <div className="flex">
            <MenuIcon />
          </div>
        </div>
      ) : (
        <div className="bg-light py-3 px-48 flex justify-between items-center border-b border-blue-100 border-opacity-50">
          <a className="flex hover:opacity-70" onClick={goHome}>
            <Logo />
          </a>

          <div className="md:flex flex-row items-center gap-12">
            <Link href="#services-section" className="hover:opacity-70">
              <Text variant="label">სერვისები</Text>
            </Link>

            <Link href="#about-section" className="hover:opacity-70">
              <Text variant="label">ჩვენს შესახებ</Text>
            </Link>

            <Button
              label="კონტაქტი"
              onClick={() => router.push("#contact-form")}
            />
          </div>
        </div>
      )}
    </>
  );
};
