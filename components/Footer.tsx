import React from "react";
import { SOCIAL_LINK } from "../constants";
import { EmailIcon, FacebookIcon } from "../icons";

export const Footer = () => {
  return (
    <div className="md:mx-36 py-4 flex items-center md:justify-around border-t border-dark-100 border-opacity-10 flex-col md:flex-row">
      <div className="flex-initial mb-4 opacity-70 flex-row flex justify-around w-40 md:hidden self-center">
        <a href={SOCIAL_LINK.instagram} target="_blank" rel="noreferrer"></a>
        <a href={SOCIAL_LINK.facebook} target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="#contact-form">
          <EmailIcon />
        </a>
      </div>
      <div className="flex-initial flex justify-around self-center">
        <h1 className="text-sm text-end font-extralight text-dark-100 opacity-50">
          2023 All rights reserved © Clean Time LLC
        </h1>
      </div>
    </div>
  );
};
