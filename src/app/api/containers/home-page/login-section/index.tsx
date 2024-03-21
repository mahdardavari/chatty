"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const LoginSection = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon
            icon={faRobot}
            className="mb-2 text-6xl text-emerald-200"
          />
        </div>
        <h1 className="text-4xl font-bold">Welcome to Chatty Pete</h1>
        <p className="mt-2 text-lg">Log in with your account to continue</p>
        <div className="mt-4 flex justify-center gap-3">
          {!user && (
            <>
              <Link href="/api/auth/login" className="btn">
                Login
              </Link>
              <Link href="/api/auth/signup" className="btn">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSection;
