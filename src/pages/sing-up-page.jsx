import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../components/button";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="margin-y padding-r flex flex-col items-center justify-center px-5 sm:px-7 md:px-14 lg:flex-row lg:justify-normal lg:gap-32 lg:px-0">
      <div className="hidden w-1/2 lg:block">
        <img src="/sing-up-sign-in.jpeg" alt="sing-in sign-up" />
      </div>
      <div className="w-full lg:w-1/2 lg:max-w-96">
        <div>
          <h3 className="tracking-wider text-dark">Login to Exclusive</h3>
          <p className="mt-2 font-light">Enter your details below</p>
        </div>

        <form className="mt-4 w-full space-y-4">
          <div>
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full border-0 border-b border-b-dark pb-1 outline-none"
            />
          </div>

          <div className="relative mb-4">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full border-0 border-b border-b-dark pb-1 outline-none"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-2 top-1"
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Button text="Log In" type="submit" />
            <p className="text-primary">Forget Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
