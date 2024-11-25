"use client";

import UserServices from "@/services/userServices";
import { Button, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginPage = () => {
  const router = useRouter();
  const userServices = new UserServices();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowHidePw = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const result = await userServices.login({ email, password });
    if (result) {
      localStorage.setItem("token", result?.token);
      localStorage.setItem("refreshToken", result?.refreshToken);
      router.push("/user-profile");
    }
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-5/6 lg:w-2/3 xl:w-1/2 h-1/2 bg-white flex justify-center items-center rounded-md">
        {/* Left side */}
        <div className="w-4/5 sm:w-2/3 md:w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
          <h1 className="text-teal-500 text-2xl font-bold text-center">
            Login in to orkard tech system
          </h1>
          <div className="w-full flex justify-center space-x-2">
            <p className="bg-gray-300 p-2 rounded-full">
              <FaFacebookF className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGoogle className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGithub className="text-teal-500" />
            </p>
          </div>
          <p className="text-gray-400">or use your email account</p>
          <TextInput
            onChange={(e: any) => setEmail(e.target.value)}
            className="w-full"
            id="email"
            type="email"
            icon={MdEmail}
            placeholder="example@gmail.com"
            required
          />
          <TextInput
            onChange={(e: any) => setPassword(e.target.value)}
            className="w-full"
            id="password"
            type={showPassword ? "text" : "password"}
            icon={FaLock}
            // rightIcon={FaEye}
            rightIcon={() =>
              !showPassword ? (
                <FaEye
                  onClick={handleShowHidePw}
                  className="cursor-pointer"
                  fontSize={12}
                  width={16}
                />
              ) : (
                <FaEyeSlash
                  onClick={handleShowHidePw}
                  className="cursor-pointer"
                />
              )
            }
            placeholder="password"
            required
          />
          <Button
            onClick={handleLogin}
            className="w-2/3 bg-teal-500 rounded-full"
          >
            Sign in
          </Button>
          <Button className="w-2/3 md:hidden text-teal-500 rounded-full px-5 border- bg-transform">
            SIGN UP
          </Button>
        </div>

        {/* Right side */}
        <div className="hidden md:flex justify-center bg-teal-500 w-1/2 h-full ">
          <div className="h-full flex flex-col justify-center items-center space-y-3 p-4">
            <h1 className="text-white text-3xl font-bold">Hello, friend!</h1>
            <p className="text-gray-200 text-center">
              Enter your personal details and start to join us!.
            </p>
            <Button className="text-white rounded-full px-5 border- bg-transform">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
