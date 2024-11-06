import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBkashInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: paymentInfo = [] } = useQuery({
        queryKey: ['paymentInfo', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/paymentInfo?email=${user.email}`);
            return res.data;
        }
    })

    return [paymentInfo, refetch]
};

export default useBkashInfo;