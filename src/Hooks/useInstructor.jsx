import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();

  const jwtAccessToken = localStorage.getItem("jwt-access-token");

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const instructorData = fetch(
        `http://localhost:5000/users/instructor/${user?.email}`,
        {
          headers: { authorization: `bearer ${jwtAccessToken}` },
        }
      );
      //   console.log(adminData.json());
      return (await instructorData).json();
      //   return adminData.json() //was Problem
    },
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
