import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTopClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: topClassData, refetch } = useQuery({
    queryKey: ["Top-class"],
    queryFn: async () => {
      const classes = await axiosSecure("/all-class/topClass");
      return classes.data;
    },
  });
  return [topClassData, refetch];
};
export default useTopClasses;
