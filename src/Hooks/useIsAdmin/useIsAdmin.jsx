import { useQuery } from "react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useIsAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/isAdmin/${user?.email}`);
      return res.data;
    },
  });

  return [isAdmin, isLoading];
};

export default useIsAdmin;
