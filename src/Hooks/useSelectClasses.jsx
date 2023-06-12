import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: selectClass, refetch } = useQuery({
    queryKey: ["select-classes"],
    // enabled: "",
    queryFn: async () => {
      const classData = await axiosSecure("/all-class/selected");
      return classData.data;
    },
  });
  return [selectClass, refetch];
};

export default useSelectClasses;
