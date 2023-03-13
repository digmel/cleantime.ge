import React from "react";
import { Text } from ".";
import { usePlatform } from "../hooks";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { ReviewCard } from "./ReviewCard";

export const ReviewSection = () => {
  const isMobile = usePlatform();
  return (
    <div className="md:my-36 my-16">
      <div className="flex justify-center flex-col items-center">
        <Text variant="title">შეფასებები</Text>

        {isMobile ? (
          <>
            <div className="scale-90 mt-6 flex flex-row gap-2 -mx-4">
              <div className="flex justify-center items-center">
                <ArrowLeftIcon />
              </div>
              <ReviewCard
                name="Julia Makarova"
                image="reviewPerson"
                body="Very good services and nice people."
              />

              <div className="flex justify-center items-center">
                <ArrowRightIcon />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-12 flex flex-row gap-12">
              <div className="flex justify-center items-center">
                <ArrowLeftIcon />
              </div>

              <ReviewCard
                name="Julia Makarova"
                image="reviewPerson"
                body="Very good services and nice people."
              />
              <ReviewCard
                name="Julia Makarova"
                image="reviewPerson"
                body="Very good services and nice people."
              />
              <ReviewCard
                name="Julia Makarova"
                image="reviewPerson"
                body="Very good services and nice people."
              />

              <div className="flex justify-center items-center">
                <ArrowRightIcon />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
