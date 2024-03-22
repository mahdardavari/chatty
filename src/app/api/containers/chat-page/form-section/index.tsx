"use client";
import { useChat } from "ai/react";

const FormSection = () => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  {
    console.log(data, messages, "data");
  }
  return (
    <div className="bg-gray-800 p-10">
      <form onSubmit={handleSubmit}>
        {/* fieldset tag is used to group related elements in a form */}
        <fieldset className="flex gap-2">
          <textarea
            className="w-full resize-none bg-gray-700 rounded-md px-2 text-white focus::bg-gray-600 focus:border-emerald-500 focus:outline focus:outline-emerald-500"
            placeholder="Send a message..."
            value={input}
            onChange={handleInputChange}
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
