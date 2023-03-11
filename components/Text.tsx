import React from "react";

type TTypography = "title" | "subtitle" | "body" | "label" | "label-xl";

type TText = {
  children: React.ReactNode;
  variant: TTypography;
  className?: string;
};

export const Text = ({ children, variant, className }: TText) => {
  switch (variant) {
    case "title":
      return (
        <h1
          className={`font-bold md:text-3xl text-xl text-blue-300 ${className}`}
        >
          {children}
        </h1>
      );

    case "subtitle":
      return (
        <h2
          className={`font-bold md:text-lg text-base text-blue-400 ${className}`}
        >
          {children}
        </h2>
      );

    case "body":
      return (
        <p
          className={`font-normal md:text-base text-sm text-blue-400 ${className}`}
        >
          {children}
        </p>
      );

    case "label":
      return (
        <p
          className={`font-medium md:text-base text-sm text-blue-300 ${className}`}
        >
          {children}
        </p>
      );

    case "label-xl":
      return (
        <p
          className={`font-extrabold md:text-6xl text-2xl text-blue-300 ${className}`}
        >
          {children}
        </p>
      );

    default:
      return <p className={className}>{children}</p>;
  }
};
