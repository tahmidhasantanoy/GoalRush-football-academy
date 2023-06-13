import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAlluser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: usersData } = useQuery({
    queryKey: ["User-data"],
    queryFn: async () => {
      const users = await axiosSecure("/users");
      return users.data;
    },
  });

  return [usersData];
};
export default useAlluser;


//pending
