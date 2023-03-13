import Link from "next/link";
import React, { useState } from "react";
import {
  EngFlagIcon,
  GeFlagIcon,
  Logo,
  LogoMobile,
  MenuCloseIcon,
  MenuIcon,
  RuFlagIcon,
} from "../icons";
import { Text } from "./Text";
import { Button } from "./Button";
import { usePlatform } from "../hooks";
import { useRouter } from "next/router";
import { SocialsInfo } from "./SocialsInfo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = usePlatform();
  const router = useRouter();

  const goHome = () => {
    router.push("/");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="bg-light py-5 px-6 flex justify-between items-center border-b border-blue-100 border-opacity-50">
            <a className="flex hover:opacity-70" onClick={goHome}>
              <LogoMobile />
            </a>
            <a className="flex" onClick={toggleMenu}>
              {isOpen ? <MenuCloseIcon /> : <MenuIcon />}
            </a>
          </div>

          {isOpen && (
            <div className="bg-light justify-start items-start md:justify-center min-h-screen py-8 px-8">
              <Text variant="label">კონტაქტი</Text>

              <SocialsInfo />

              <div className="flex flex-col mt-12 gap-12">
                <Link
                  href="#services-section"
                  className="hover:opacity-70"
                  onClick={() => setIsOpen(false)}
                >
                  <Text variant="label">სერვისები</Text>
                </Link>

                <Link
                  href="#about-section"
                  className="hover:opacity-70"
                  onClick={() => setIsOpen(false)}
                >
                  <Text variant="label">ჩვენს შესახებ</Text>
                </Link>

                <div className="flex gap-16">
                  <GeFlagIcon />
                  <RuFlagIcon />
                  <EngFlagIcon />
                </div>
              </div>
            </div>
          )}
        </>
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
