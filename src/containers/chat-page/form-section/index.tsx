"use client";
import React, { FormEvent, useState } from "react";

const FormSection = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-gray-800 p-10">
        <form onSubmit={handleSubmit}>
          {/* fieldset tag is used to group related elements in a form */}
          <fieldset className="flex gap-2">
            <textarea
              className="w-full resize-none bg-gray-700 rounded-md px-2 text-white focus::bg-gray-600 focus:border-emerald-500 focus:outline focus:outline-emerald-500"
              placeholder="Send a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="btn" type="submit">
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default FormSection;
