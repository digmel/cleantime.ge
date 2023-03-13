import React from "react";
import { usePlatform } from "../hooks";
import { Logo } from "../icons";
import { SocialsInfo } from "./SocialsInfo";
import { Text } from "./Text";

export const Footer = () => {
  const isMobile = usePlatform();

  return (
    <div className="py-8 md:px-36 px-6 flex items-start md:justify-around border-t border-blue-100 bg-gray-100 border-opacity-50 flex-col md:flex-row">
      <div className="flex flex-col justify-start">
        {!isMobile && (
          <div className="pb-5 border-b-2 border-b-blue-100 mb-5">
            <Logo />
          </div>
        )}
        <Text variant="body" className="max-w-xs">
          2023 © ყველა უფლება დაცულია შპს. &quot;Clean Time&quot;-ის მიერ.
        </Text>
      </div>

      {!isMobile && (
        <div className="">
          <Text variant="subtitle" className="mb-6">
            სერვისები
          </Text>

          <div className="gap-4 flex flex-col">
            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">სტანდარტული დალაგება</Text>
            </a>

            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">გენერალური დალაგება </Text>
            </a>
            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">რემონტის შემდგომი დალაგება</Text>
            </a>
            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">ავეჯის ქიმწმენდა</Text>
            </a>
            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">ვიტრაჟების წმენდა</Text>
            </a>
            <a href={"#services-section"} rel="noreferrer">
              <Text variant="body">სადარბაზოს დალაგება</Text>
            </a>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="">
          <Text variant="subtitle" className="">
            კონტაქტი
          </Text>
          <SocialsInfo />
        </div>
      )}
    </div>
  );
};
