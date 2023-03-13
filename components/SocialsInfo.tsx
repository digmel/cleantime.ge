import React from "react";
import { Text } from "./Text";
import { EmailIcon, FacebookIcon, PhoneIcon, WhatsappIcon } from "../icons";

export const SocialsInfo = () => {
  return (
    <>
      <div className="flex md:gap-8 md:flex-row flex-col gap-0">
        <div className="flex flex-row mt-8 gap-2">
          <PhoneIcon />
          <Text variant="body" className="text-opacity-70">
            +(995) 599 945 200
          </Text>
        </div>

        <div className="flex flex-row md:mt-8 mt-4 gap-2">
          <WhatsappIcon />
          <Text variant="body" className="text-opacity-70">
            +(995) 599 945 200
          </Text>
        </div>
      </div>
      <div className="flex md:gap-4 md:flex-row flex-col gap-0">
        <div className="flex flex-row md:mt-8 mt-4 gap-2">
          <EmailIcon />
          <Text variant="body" className="text-opacity-70">
            info@cleantime.com
          </Text>
        </div>

        <div className="flex flex-row md:mt-8 mt-4 gap-2">
          <FacebookIcon />
          <Text variant="body" className="text-opacity-70">
            fb.com/cleantime.georgia
          </Text>
        </div>
      </div>
    </>
  );
};
