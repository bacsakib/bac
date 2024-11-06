import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";


const Orders = () => {


    const axiosSecure = useAxiosSecure();
    const { data: adminPaymentInfo = [], refetch } = useQuery({
        queryKey: ['adminPaymentInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminPaymentInfo');
            return res.data;
        }
    })
    console.log("adminPaymentInfo:", adminPaymentInfo); 


    const handleCourseConfirm = () =>{
       

    }





    const handleDeleteOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/adminPaymentInfo/${id}`)
                    .then(res => {
                        if (res.data.success) {
                            refetch(); // Assuming refetch is a function to update UI after deletion
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: res.data.message || "Failed to delete payment information.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting payment information:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting payment information.",
                            icon: "error"
                        });
                    });
            }
        });
    }

    



    return (

        <div className="">
            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4">  Orders </h3>
                    <CgProfile className="text-blue-400" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>


            <div className="">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Course</th>
                            <th>Payment Number</th>
                            <th>Ammount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px]">
                        {
                            adminPaymentInfo.map((pay, index) => <tr key={pay._id}>
                                <th>{index + 1}</th>
                                <td>{pay?.paymentTime}</td>
                                <td>{pay?.name}</td>
                                <td>{pay?.yourPhone}</td>
                                <td>{pay?.course}</td>
                                <td>{pay?.paymentNumber}</td>
                                <td>{pay?.ammount}</td>
                                <td>
                                    <div className="dropdown dropdown-end  ">
                                        <div tabIndex={0} role="button" className="btn btn-sm m-1 text-[8px]">Edit</div>
                                        <ul tabIndex={0} className="dropdown-content text-[8px] z-[1] menu p-2 shadow bg-base-100  rounded-box w-24">
                                            <li><button  onClick={handleCourseConfirm}>Confirmed</button></li>
                                            <li><button onClick={() => handleDeleteOrder(pay._id)} >Delete</button></li>
                                        </ul>
                                    </div>
                                </td>
                               
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;