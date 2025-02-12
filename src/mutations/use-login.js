import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { backendUrl } from "../libs/consts";
import { extractErrorMessage } from "../libs/utils";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../providers/query-provider";
import { profileKey } from "../queries/use-profile";

export const loginKey = ["login"];

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: loginKey,
    mutationFn: (data) => loginUser(data),

    onMutate() {
      toast.dismiss();
      toast.loading("Logging In user");
    },
    onSuccess(data) {
      toast.dismiss();
      toast.success("User logged in successfully");
      queryClient.setQueryData(profileKey, data);
      navigate("/");
    },

    onError(err) {
      toast.dismiss();
      toast.error("Can't login", err.message);
    },
  });
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${backendUrl}/api/auth/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
};
