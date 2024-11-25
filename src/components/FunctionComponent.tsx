"use client";

import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// components/FunctionComponent.tsx
const FunctionComponent: React.FC<{ message: string }> = ({ message }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const handleNavigateToRegister = () => {
    try {
      setIsLoading(true);
      router.push("/register");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-start justify-start flex-col gap-4">
      <div className="border border-red-500 w-full">
        <h1 className="example-global-css">{message}</h1>
        <div className="bg-blue-100 text-red-500 p-4">{message}</div>
      </div>
      <div className="flex items-start justify-start gap-6 border border-green-500 w-full p-4">
        <Button color="red">
          <Link href="/login" color="red">
            Login
          </Link>
        </Button>
        <Button color="green" onClick={() => handleNavigateToRegister()}>
          {isLoading ? "Submiting......" : "Register"}
        </Button>
        <Button color="blue" onClick={() => router.push("/register")}>
          Flobite button
        </Button>
      </div>
    </div>
  );
};

export default FunctionComponent;
