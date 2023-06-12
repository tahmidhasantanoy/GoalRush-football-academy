import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSpecificClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: specificInstrucClass } = useQuery({
    queryKey: ["instructor-classes"],
    queryFn: async () => {
      const instClass = axiosSecure(
        `http://localhost:5000/all-class/instructor?instructorEmail=${user?.email}`
      );
      return instClass.data;
    },
  });
  return [specificInstrucClass];
};
export default useSpecificClass;
