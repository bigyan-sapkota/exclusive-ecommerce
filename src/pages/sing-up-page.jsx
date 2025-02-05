import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../components/button";
import { uploadToImageBB } from "../libs/utils";
import { schema } from "../schemas/sign-in-schema";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsUploading(true);
      let imageUrl = null;

      if (data.profileImage?.length > 0) {
        imageUrl = await uploadToImageBB(data.profileImage[0]);
      }

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="margin-y padding-r flex flex-col items-center justify-center px-5 sm:px-7 md:px-14 lg:flex-row lg:justify-normal lg:gap-32 lg:px-0">
      <div className="hidden w-1/2 lg:block">
        <img src="/sing-up-sign-in.jpeg" alt="sign-in sign-up" />
      </div>
      <div className="w-full lg:w-1/2 lg:max-w-96">
        <div>
          <h3 className="tracking-wider text-dark">Login to Exclusive</h3>
          <p className="mt-2 font-light">Enter your details below</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 w-full space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full border-0 border-b border-b-gray-500 pb-1 outline-none"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full border-0 border-b border-b-gray-500 pb-1 outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number (10 digits)"
              className="w-full border-0 border-b border-b-gray-500 pb-1 outline-none"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full border-0 border-b border-b-gray-500 pb-1 outline-none"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-2 top-1"
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border-0 border-b border-b-gray-500 pb-1 outline-none"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
              className="absolute right-2 top-1"
            >
              {isConfirmPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              {...register("profileImage")}
              className="w-full pb-1 outline-none"
            />
            {errors.profileImage && (
              <p className="text-sm text-red-500">
                {errors.profileImage.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button
              text={isUploading ? "Signing Up..." : "Sign Up"}
              type="submit"
            />
            <p className="text-primary">Forget Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
