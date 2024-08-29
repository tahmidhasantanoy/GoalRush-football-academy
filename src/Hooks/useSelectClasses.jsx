import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;

  const { data: selectClass, refetch } = useQuery({
    queryKey: ["select-classes"],
    // enabled: "",
    queryFn: async () => {
      const classData = await axiosSecure(
        `/all-class/selected?email=${encodeURIComponent(email)}`  // 
      );
      return classData.data;
    },
  });
  return [selectClass, refetch];
};

export default useSelectClasses;
