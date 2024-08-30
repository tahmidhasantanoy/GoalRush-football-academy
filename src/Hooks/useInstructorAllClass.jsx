import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructorAllClass = () => {
  const { axiosSecure } = useAxiosSecure();

  const { data: instructorAllClassData, refetch } = useQuery({
    queryKey: ["instructor-all-class"],
    queryFn: async () => {
      const instructorAllClass = await axiosSecure(/* path will be define */);
      console.log(instructorAllClass);
    },
  });
  return;
};

export default useInstructorAllClass;
