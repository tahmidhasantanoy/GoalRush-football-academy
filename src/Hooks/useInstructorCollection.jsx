import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructorCollection = () => {
  // console.log("In  hook");
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const jwtAccessToken = localStorage.getItem("jwt-access-token");
  const { data: instructors, refetch } = useQuery({
    queryKey: ["instructor-collections"],
    enabled: !loading && !!user?.email && !!jwtAccessToken,
    queryFn: async () => {
      const res = await axiosSecure("/users/instructors");
    //   console.log(res.data);
      return res.data;
    },
  });

  return [instructors, refetch,loading];
};

export default useInstructorCollection;
