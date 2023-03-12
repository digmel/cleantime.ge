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
    <Link href={link}>
      <div
        className={`bg-gray-100 rounded-xl max-w-sm shadow-md -bottom-4 ${className}`}
      >
        {image && (
          <Image
            src={`/assets/${image}.png`}
            width={400}
            height={229}
            alt="1"
            quality={100}
            style={{ borderRadius: "12px 12px 0 0" }}
          />
        )}

        <div className="px-5">
          <Text variant="subtitle" className="mb-2 mt-5">
            {title}
          </Text>

          <Text variant="body" className="pb-8 text-gray-300">
            {subtitle}
          </Text>
        </div>
      </div>
    </Link>
  );
};
