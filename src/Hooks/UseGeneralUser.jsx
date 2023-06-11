import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useGeneralUser = () => {
  const { user } = useAuth();

  const jwtAccessToken = localStorage.getItem("jwt-access-token");

  const { data: isGeneralUser, isLoading: isGeneralUserLoading } = useQuery({
    queryKey: ["generalUser", user?.email],
    queryFn: async () => {
      const generalUserData = fetch(
        `http://localhost:5000/users/generalUser/${user?.email}`,
        {
          headers: { authorization: `bearer ${jwtAccessToken}` },
        }
      );
      //   console.log(adminData.json());
      return (await generalUserData).json();
      //   return adminData.json() //was Problem
    },
  });

  return [isGeneralUser, isGeneralUserLoading];
};

export default useGeneralUser;
