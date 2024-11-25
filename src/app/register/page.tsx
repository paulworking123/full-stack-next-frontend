"use client";

import UserServices from "@/services/userServices";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
  const router = useRouter();
  const userServices = new UserServices();
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await userServices.register({
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    });
    if (result) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      router.push("/login");
    } else {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
        {/* {(success || error) && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              success
                ? "text-green-800 bg-green-300"
                : "text-red-800 bg-red-300"
            }`}
            role="alert"
          >
            <span className="font-medium">
              {success ? "Success" : "Failed"} alert!
            </span>{" "}
            {success ? "Thank you so much" : "Please try again later!"}
          </div>
        )} */}

        {success && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="font-medium">Success alert!</span> Change a few
            things up and try submitting again.
          </div>
        )}

        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Change a few
            things up and try submitting again.
          </div>
        )}
        <div className="bg-white w-2/3 shadow-lg flex rounded-xl">
          <div className="w-1/2 bg-green-400 p-6 text-white hidden md:flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="py-6 text-center">
              To keep connected with us please login with your personal info
            </p>
            <Button outline gradientDuoTone="greenToBlue">
              Sign In
            </Button>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-green-400 text-2xl font-semibold mb-6 text-center">
              Create Account
            </h2>
            <div className="flex justify-center space-x-3 mb-4">
              <button className="bg-gray-200 rounded-full p-2">
                <FaFacebookF className="text-green-400" />
              </button>
              <button className="bg-gray-200 rounded-full p-2">
                <FaGoogle className="text-green-400" />
              </button>
              <button className="bg-gray-200 rounded-full p-2">
                <FaLinkedinIn className="text-green-400" />
              </button>
            </div>
            <p className="text-green-400 text-center mb-4">
              or use your email for registration:
            </p>

            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name...."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                name="Last name"
                type="text"
                placeholder="Enter your last name...."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                name="Email"
                type="email"
                placeholder="Enter your email...."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="password"
                type="password"
                placeholder="*************"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-2 rounded-full font-semibold hover:bg-teal-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
