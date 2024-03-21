import { Metadata } from "next";

import FormSection from "@/app/api/containers/chat-page/form-section";
import SidebarSection from "@/app/api/containers/chat-page/sidebar-section";

export const metadata: Metadata = {
  title: "New chat",
};

export default function Chat() {
  return (
    <>
      <div className="grid h-screen grid-cols-[16.25rem_1fr]">
        <SidebarSection />
        <div className="bg-gray-700 flex flex-col">
          <div className="flex-1">window</div>
          <FormSection />
        </div>
      </div>
    </>
  );
}
