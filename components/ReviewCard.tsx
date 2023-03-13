import React from "react";
import Image from "next/image";
import { Text } from "./Text";
import { StarIcon } from "../icons";

type TCard = {
  name: string;
  body: string;
  image?: string;
  className?: string;
};

export const ReviewCard = ({ name, body, image, className }: TCard) => {
  return (
    <div
      className={`bg-gray-100 rounded-xl max-w-xs shadow-md -bottom-4 py-6 px-6 ${className}`}
    >
      <div className="flex flex-row">
        {image && (
          <Image
            src={`/assets/${image}.png`}
            width={80}
            height={80}
            alt="1"
            quality={100}
          />
        )}

        <div className="flex flex-col justify-start items-center ml-3">
          <Text variant="subtitle" className="mb-2 mt-2">
            {name}
          </Text>

          <div className="flex gap-2 flex-row justify-center items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Text variant="body">{body}</Text>
      </div>
    </div>
  );
};
