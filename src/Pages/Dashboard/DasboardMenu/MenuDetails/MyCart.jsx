import { MdDeleteOutline } from "react-icons/md";
import useCart from "../../../../Hooks/useCart";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FiEdit } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 500
                            });
                        }
                    })
            }
        });
    }

    const banglaToRegularNumber = (banglaNumber) => {
        const numberMap = {
            '০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4,
            '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9
        };
        return parseInt(banglaNumber.replace(/[০-৯]/g, match => numberMap[match]), 10);
    };
    const totalPrice = cart.reduce((total, item) => total + banglaToRegularNumber(item.price), 0);
    return (
        <div>
            <Helmet>
                <title>Motion Boss | Cart </title>
            </Helmet>
            <div className="flex justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text font-semibold  gap-4">  My cart </h3>
                    <IoCartOutline className="text-blue-500" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider divider-success opacity-35"></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <img className="w-24 rounded-2xl" src={item.thumbnail_url} alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        <h3 className="font-semibold text-[16px]">  {item.courseName}</h3>
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td className="flex items-center gap-1"><TbCurrencyTaka />{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn  text-2xl   text-red-800"><MdDeleteOutline /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <div className="divider divider-success opacity-35"></div>
                    <div className="flex items-center mt-12 justify-end gap-24 lg:pr-24">
                        <div className="flex  gap-4 text-xl border-2 w-64 py-2 border-zinc-400 rounded-lg justify-center">
                            <h1 className="flex ">Total Payment</h1>
                            <h1 className="flex item-center"> <TbCurrencyTaka /> {totalPrice}</h1>
                        </div>
                        <div>
                            {cart.length ? <Link to="/profile/bkash">
                                <button className="btn btn-accent px-12">Payment</button>
                            </Link> :
                                <button disabled className="btn btn-accent px-12">Payment</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;