import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classData } = useQuery({
    queryKey: ["Class-data"],
    queryFn: async () => {
      const classes = await axiosSecure("/all-class");
      return classes.data;
    },
  });
  return [classData];
};
export default useAllClass;
