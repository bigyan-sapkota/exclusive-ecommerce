import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPhoneAlt, FaUser, FaImage } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import Modal from "../modal";
import Button from "../button";
import { UpdateProfileSchema } from "../../schemas/update-profile.schema";
import { uploadToImageBB } from "../../libs/utils";
import { useProfile } from "../../queries/use-profile";
import { useUpdateProfile } from "../../mutations/use-update-profile";

const UpdateProfileModal = ({ isOpen, onClose }) => {
  const { data: user, isLoading } = useProfile();
  const { mutate } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      profileImage: "",
    },
  });

  // Reset form with user data when it becomes available
  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        phone: user.phone || "",
        password: "", // Always empty for security
        profileImage: "", // File inputs can't have default values
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    // Only include fields that were actually changed
    const changedFields = {};

    if (data.name !== user?.name && data.name !== "") {
      changedFields.name = data.name;
    }

    if (data.phone !== user?.phone && data.phone !== "") {
      changedFields.phone = data.phone;
    }

    if (data.password !== "") {
      changedFields.password = data.password;
    }

    // Handle image upload
    if (data.profileImage?.length > 0) {
      const image = await uploadToImageBB(data.profileImage[0]);
      if (image) {
        changedFields.image = image;
      }
    }

    // Only submit if there are actually changes
    if (Object.keys(changedFields).length > 0) {
      mutate(changedFields);
      onClose();
    }
  };

  if (isLoading) {
    return (
      <Modal title="Update Profile" isOpen={isOpen} onClose={onClose}>
        <div className="flex justify-center py-8">Loading...</div>
      </Modal>
    );
  }

  return (
    <Modal title="Update Profile" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              {...register("name")}
              className="w-full rounded-md border p-2"
              placeholder={user?.name || "Enter your name"}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-400" />
            <input
              type="tel"
              {...register("phone")}
              className="w-full rounded-md border p-2"
              placeholder={user?.phone || "Enter your phone number"}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center gap-2">
            <MdOutlinePassword className="text-gray-400" />
            <input
              type="password"
              {...register("password")}
              className="w-full rounded-md border p-2"
              placeholder="New password (optional)"
            />
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Profile Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Profile Image
          </label>
          <div className="flex items-start gap-4">
            {user?.image && (
              <img
                src={user.image}
                alt="Current profile"
                className="h-20 w-20 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <FaImage className="text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  {...register("profileImage")}
                  className="w-full rounded-md border p-2"
                />
              </div>
              {errors.profileImage && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.profileImage.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end gap-3">
          <Button
            text="Cancel"
            variant="secondary"
            buttonClickHandler={onClose}
          />
          <Button
            text="Save Changes"
            buttonClickHandler={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </Modal>
  );
};

export default UpdateProfileModal;
