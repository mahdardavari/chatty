import Link from "next/link";
import React from "react";

const SidebarSection = () => {
  return (
    <>
      <div className="bg-gray-800 text-white">
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    </>
  );
};

export default SidebarSection;
