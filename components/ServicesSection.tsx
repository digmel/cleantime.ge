import React from "react";
import { Text } from "./Text";
import { Card } from "./Card";

export const ServicesSection = () => {
  return (
    <div
      className="flex flex-col items-center md:mt-32 mt-16"
      id="services-section"
    >
      <Text variant="title">სერვისები</Text>
      <Text variant="body" className="mt-6 md:max-w-xl text-center">
        საბოლოო ფასს ვადგენთ შეფასების შემდგომ ადგილზე მოსვლით. აქ უნდა იყოს
        შესაბამისი სერვისის უფრო დეტალური აღწერა.
      </Text>

      <div className="mt-12 flex md:gap-10 gap-9 flex-col md:flex-row md:mx-0 mx-6">
        <Card
          image="services-1"
          title="სახლის სტანდარტული დალაგება"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
        <Card
          image="services-2"
          title="სახლის გენერალური დალაგება"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
        <Card
          image="services-3"
          title="რემონტის შემდგომი დალაგება"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
      </div>

      <div className="md:mt-16 mt-9 flex md:gap-10 gap-9 flex-col md:flex-row mx-6">
        <Card
          image="services-4"
          title="ავეჯის ქიმწმენდა"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
        <Card
          image="services-5"
          title="ვიტრაჟების წმენდა"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
        <Card
          image="services-6"
          title="სადარბაზოს დალაგება"
          subtitle="აქ უნდა იყოს შესაბამისი სერვისის უფრო დეტალური აღწერა."
        />
      </div>
    </div>
  );
};
