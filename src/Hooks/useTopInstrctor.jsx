import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTopInstrctor = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: topInstructorData, refetch } = useQuery({
      queryKey: ["Top=instructor"],
      queryFn: async () => {
        const classes = await axiosSecure("/users/topInstructor");
        return classes.data;
      },
    });
    return [topInstructorData, refetch];
};
export default useTopInstrctor;
