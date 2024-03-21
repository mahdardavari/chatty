"use client";
import { streamReader } from "openai-edge-stream";
import React, { FormEvent, useState } from "react";

const FormSection = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const response = await fetch("/api/chat/POST", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: message }),
    });

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    await streamReader(reader, async (message) => {
      console.log(message, "mxx");
    });
  };

  return (
    <div className="bg-gray-800 p-10">
      <form onSubmit={handleSubmit}>
        {/* fieldset tag is used to group related elements in a form */}
        <fieldset className="flex gap-2">
          <textarea
            className="w-full resize-none bg-gray-700 rounded-md px-2 text-white focus::bg-gray-600 focus:border-emerald-500 focus:outline focus:outline-emerald-500"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="btn" type="submit">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormSection;
