import Head from "next/head";
import React from "react";
import { Button, Text } from "../components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <div className="relative object-cover md:h-[80vh] h-[70vh] bg-cover bg-center">
        <Image src="/assets/hero.png" fill alt="1" quality={100} />
      </div>

      <div className="absolute md:-mt-[500px] md:ml-48 -mt-[250px] md:py-12 py-8 md:px-8 px-6 rounded-xl bg-white flex flex-col justify-center items-start md:gap-8 gap-6 max-w-[700px] bg-opacity-90">
        <Text variant="title">დასუფთავების კომპანია</Text>
        <Text variant="body">
          ჩვენ ვმუშაობთ მხოლოდ პროფესიონალური აპარატურითა და საწმენდი
          საშუალებებით. გაძლევთ სამუშაოს ხარისხის 100%-იან გარანტიას!
        </Text>

        <Button label="კონტაქტი" />
      </div>
    </>
  );
};
