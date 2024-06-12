import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseaxiosSecure from "./UseaxiosSecure";


const UseAdmin = () => {
    const { user, loading } = UseAuth();
    const axiosSecure = UseaxiosSecure();

    const { data: isAdmin = null, isLoading: isAdminLoading, error } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${user.email}`);
                return res.data?.admin;
            } catch (err) {
                console.error('Error fetching admin status:', err);
                return false; // Default to false in case of an error
            }
        }
    });

    if (error) {
        console.error('Error in UseAdmin hook:', error);
    }

    return [isAdmin, isAdminLoading];


};

export default UseAdmin;