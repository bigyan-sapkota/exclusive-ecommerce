import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaPhoneAlt, FaUser, FaImage } from "react-icons/fa";
import Modal from "../modal";
import Button from "../button";
import { UpdateProfileSchema } from "../../schemas/update-profile.schema";
import { uploadToImageBB } from "../../libs/utils";
import { MdOutlinePassword } from "react-icons/md";
import { useProfile } from "../../queries/use-profile";
import { useUpdateProfile } from "../../mutations/use-update-profile";

const UpdateProfileModal = ({ isOpen, onClose }) => {
  const { data: user } = useProfile();
  const { mutate } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: user?.name || "",
      phone: user?.phone || "",
      password: "",
      profileImage: user?.profileImage || "",
    },
  });

  const onSubmit = async (data) => {
    let image = null;

    if (data.profileImage?.length > 0) {
      image = await uploadToImageBB(data.profileImage[0]);
    }

    let submissionData = { ...data };

    if (image) {
      submissionData.image = image;
    }

    mutate(submissionData);
    onClose();
  };

  return (
    <Modal title="Update Profile" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            {...register("name")}
            className="w-full border p-2"
            placeholder="Enter your name"
          />
        </div>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <input
            type="tel"
            {...register("phone")}
            className="w-full border p-2"
            placeholder="Enter your phone number"
          />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        {/* Password */}
        <div className="flex items-center gap-2">
          <MdOutlinePassword />
          <input
            type="password"
            {...register("password")}
            className="w-full border p-2"
            placeholder="New password (optional)"
          />
        </div>

        {/* Profile Image Upload */}
        <div className="flex items-center gap-2">
          <div>
            <img
              src={user?.image}
              alt="profile"
              className="size-20 rounded-full object-cover"
            />
          </div>
          <FaImage />
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
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
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
