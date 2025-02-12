import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../libs/axios-instance";
import { extractErrorMessage } from "../libs/utils";

export const profileKey = ["profile"];

export const useProfile = () => {
  return useQuery({
    queryKey: profileKey,
    queryFn: fetchProfile,
  });
};

export const fetchProfile = async () => {
  try {
    const response = await apiClient.get("/api/users/profile", {
      withCredentials: true,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
};
