import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../libs/axios";

interface AuthDataType {
  email: string;
  password: string;
  name?: string;
}

export const useAuth = (isLogin: boolean) => {
  const endpoint = `/auth/${isLogin ? "login" : "register"}`;

  const mutation = useMutation({
    mutationFn: async (authData: AuthDataType) => {
      const response = await axiosInstance.post(endpoint, authData);
      return response.data;
    },
  });

  return {
    ...mutation,
    isLoading: mutation?.isPending,
    isError: mutation?.isError,
    error: mutation?.error,
  };
};
