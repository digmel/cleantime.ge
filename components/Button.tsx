import React, { ReactNode } from "react";
import { Text } from "./Text";

type TButton = {
  label: string;
  className?: string;
  onClick?: Function;
  children?: ReactNode;
};

export const Button = ({
  label,
  className,
  onClick = () => {},
  children,
}: TButton) => {
  return (
    <button
      onClick={() => onClick()}
      className={`"md:py-3 md:px-6 py-[10px] px-4 rounded-xl bg-blue-300 hover:opacity-70 ${className}`}
    >
      {label && (
        <Text variant="label" className="text-white">
          {label}
        </Text>
      )}
      {children}
    </button>
  );
};
