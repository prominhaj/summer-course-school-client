import { useQuery } from "react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";

const useInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: isInstructor, isLoading: instructorLoading } = useQuery({
    queryKey: ["isInstructor"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/isInstructor/${user?.email}`);
      return res.data;
    },
  });

  return [isInstructor, instructorLoading];
};

export default useInstructor;
