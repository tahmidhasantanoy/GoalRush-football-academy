import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();

  const jwtAccessToken = localStorage.getItem("jwt-access-token");

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const adminData = fetch(
        `http://localhost:5000/users/admin/${user?.email}`,
        {
          headers: { authorization: `bearer ${jwtAccessToken}` },
        }
      );
      //   console.log(adminData.json());
      return (await adminData).json();
      //   return adminData.json() //was Problem
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
