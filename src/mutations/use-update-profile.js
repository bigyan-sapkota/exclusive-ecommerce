import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { backendUrl } from "../libs/consts";
import { extractErrorMessage } from "../libs/utils";
import { queryClient } from "../providers/query-provider";
import { profileKey } from "../queries/use-profile";

export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: (data) => updateProfile(data),

    onSuccess(data) {
      toast.dismiss();
      toast.success(`Profile Updated Successfully`);
      queryClient.setQueryData(profileKey, data);
    },

    onError(err) {
      toast.dismiss();
      toast.error(`Error while updating profile ${err.message}`);
    },
  });
};

const updateProfile = async (data) => {
  try {
    const response = await axios.put(`${backendUrl}/api/users/profile`, data, {
      withCredentials: true,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
};
