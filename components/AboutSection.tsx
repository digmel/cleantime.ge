import Head from "next/head";
import React from "react";
import { Button, Text } from ".";
import Image from "next/image";
import { usePlatform } from "../hooks";

export const AboutSection = () => {
  const isMobile = usePlatform();
  return (
    <div className="md:mt-36 mt-16">
      <div className="md:mx-[200px] mx-6">
        <Image
          src="/assets/aboutCover.png"
          width={isMobile ? 390 : 1280}
          height={200}
          alt="1"
          quality={100}
        />
      </div>

      <div className="flex justify-center flex-col items-center md:gap-12 gap-6 mt-16 mx-6">
        <Text variant="title">ჩვენ შესახებ</Text>
        <Text variant="body" className="max-w-5xl text-center">
          აქ უნდა იყოს ინფორმაცია ქლინ თაიმის და მისი გუნდის შესახებ. მაქსიმუმ 1
          აბზაცი.აქ უნდა იყოს ინფორმაცია ქლინ თაიმის და მისი გუნდის შესახებ.
          მაქსიმუმ 1 აბზაცი.
        </Text>

        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex justify-center items-center mt-6 md:mt-0 flex-col gap-2 w-1/2 md:w-64">
            <Text variant="label-xl">64</Text>
            <Text variant="label" className="text-center">
              დასუფთავებული ობიექტი
            </Text>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 w-1/2 md:w-64">
            <Text variant="label-xl">18</Text>
            <Text variant="label" className="text-center">
              გუნდის წევრი
            </Text>
          </div>

          <div className="flex justify-center items-center flex-col mt-6 md:mt-0 gap-2 w-1/2 md:w-64">
            <Text variant="label-xl">58</Text>
            <Text variant="label" className="text-center">
              კმაყოფილი მომხმარებელი
            </Text>
          </div>

          <div className="flex justify-center items-center flex-col gap-2 w-1/2 md:w-64">
            <Text variant="label-xl">10</Text>
            <Text variant="label" className="text-center">
              წელი ბიზნესში
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
