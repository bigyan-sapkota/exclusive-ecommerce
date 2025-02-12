import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { backendUrl } from "../libs/consts";
import { queryClient } from "../providers/query-provider";
import { profileKey } from "../queries/use-profile";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register-user"],
    mutationFn: (data) => registerUser(data),

    onSuccess(data) {
      toast.dismiss();
      toast.success(`Hi ${data.name}. Welcome to exclusive e-commerce`);
      queryClient.setQueryData(profileKey, data);
      navigate("/");
      window.scrollTo({ top: 0 });
    },
  });
};

const registerUser = async (data) => {
  const response = await axios.post(`${backendUrl}/api/auth/register`, data, {
    withCredentials: true,
  });
  return response.data.user;
};
