import { AxiosError } from "axios";

export const uploadToImageBB = async (image) => {
  if (!image) return null;

  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=36d09bc08fc2eedb94e214323ddbfc20`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Failed to upload image");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const extractErrorMessage = (error) => {
  if (typeof error === "string") return error;
  if (error instanceof AxiosError) {
    return error.response?.data.message || error.message;
  } else if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error occurred!";
};
