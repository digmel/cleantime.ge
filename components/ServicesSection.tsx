import React from "react";
import { Text } from "./Text";
import { Card } from "./Card";

export const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center md:mt-36 mt-16">
      <Text variant="title">სერვისები</Text>
      <Text variant="body" className="mt-6 md:max-w-xl text-center">
        საბოლოო ფასს ვადგენთ შეფასების შემდგომ ადგილზე მოსვლით. ჩვენი
        მომსახურების ფასი იწყება 2 ლარიდან.
      </Text>

      <div>{/* <Card /> */}</div>
    </div>
  );
};
