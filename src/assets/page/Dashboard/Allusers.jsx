import { useQuery } from "@tanstack/react-query";
import UseaxiosSecure from "../../Hooks/UseaxiosSecure";
import Modal from "../../component/Modal";



const Allusers = () => {

    const axiosSecure = UseaxiosSecure()
    //   Fetch users Data
    const {
        data: users = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`)
            return data
        },
    })



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th> <Modal ></Modal></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(item => <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <th> <Modal></Modal></th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Allusers;

