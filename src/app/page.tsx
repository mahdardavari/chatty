import { Metadata } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import LoginSection from "./api/containers/home-page/login-section";

export const metadata: Metadata = {
  title: "Chatty Pete - Login or SignUp",
};

export default async function Home() {
  const session = await getSession();
  if (!!session) {
    redirect("/chat");
  }
  return (
    <>
      <div className="flex min-h-screen w-full justify-center items-center bg-gray-800 text-white text-center">
        <LoginSection />
      </div>
    </>
  );
}
