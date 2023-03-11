import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "./Text";

type TCard = {
  title: string;
  subtitle: string;
  image?: string;
  className?: string;
  link?: string;
};

export const Card = ({
  title,
  subtitle,
  image,
  className,
  link = "/",
}: TCard) => {
  return (
    <Link className="md:w-1/2 flex flex-col md:mx-6 mb-12" href={link}>
      <div
        className={`md:h-96 h-64 mb-4 rounded flex justify-center items-center ${className}`}
      >
        {image && (
          <Image
            src={`/assets/${image}.png`}
            width={400}
            height={229}
            alt="1"
            quality={30}
          />
        )}
      </div>
      <Text variant="subtitle" className="mb-2">
        {title}
      </Text>

      <Text variant="body">{subtitle}</Text>
    </Link>
  );
};
