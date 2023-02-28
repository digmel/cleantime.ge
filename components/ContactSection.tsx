import React, { useState } from "react";
import { ContactSectionIcon } from "../icons";
import { StoreInfo } from "./StoreInfo";
import { TextInput } from "./TextInput";

const URL =
  "https://script.google.com/macros/s/AKfycbyWA81iY-k9_UAx78vEvaMEwJEtXcpJuiqr1lh3RmvRHauPZjP7XXpl7ReJPkMT5Ujo1w/exec";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const params = {
    email,
    name,
    message,
  };

  async function sendEmail() {
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(params),
    });

    const res = await response.json();
    if (res?.result?.contentLength > 0) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col items-center md:mt-32 mt-24">
      <h1 className="text-primary text-2xl">Contact</h1>

      <div className="md:w-fit rounded-lg flex md:flex-row flex-col-reverse py-12 md:px-14">
        <div className="flex basis-3/4 flex-col items-center justify-center">
          <TextInput
            label="Name"
            className="mb-8"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
          />
          <TextInput
            label="Email"
            className="mb-8"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            label="Message"
            variant="textarea"
            className="mb-8"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />

          <button
            className="w-32 h-12 bg-primary rounded self-center"
            onClick={sendEmail}
          >
            <h1 className="text-light text-lg">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
