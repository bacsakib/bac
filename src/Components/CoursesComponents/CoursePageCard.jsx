import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const CoursePageCard = ({ course }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosSecure()
    const { user } = useAuth()
    const { courseId, courseName,start_course_name, categoryName, totalClasses, trainerImageUrl, trainerName, price, thumbnail_url } = course;
    const [,refetch]= useCart()
console.log(course)

    // problem start
    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: courseId,
                email: user.email,
                courseName,
                thumbnail_url,
                price,
                start_course_name
            }
            axiosPublic.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('User added to the database');
                        Swal.fire({
                            title: "Cart successfully added",
                            text: "Buy now or vew more course!",
                            icon: "success",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Pay Now!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                //   send the user to the login page
                                navigate('/profile/my-cart')
                            }
                        });
                        refetch();
                    }
                })
                .catch(error => {
                    console.error('Error while adding user to the database:', error);
                    Swal.fire({
                        title: "Error",
                        text: "Failed to add user to the database. Please try again.",
                        icon: "error"
                    });
                });
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className=" mx-auto ">
            <div className="card card-compact  bg-base-100 shadow-xl">

                <figure><img src={thumbnail_url} alt="coursec" /></figure>
                <div className="card-body">
                    <button className="btn w-40 text-[#3a67ae]  btn-sm"><Link>{categoryName}</Link></button>

                    <h2 className="card-title  text-3xl">{courseName}</h2>
                    <div className="flex  items-center gap-2  bg-slate-100 p-1 mt-2 rounded-md">
                        <div className="p1 border-r-2 border-gray-400 pr-4 ">
                            <img className="w-6 " src={trainerImageUrl} alt="" />
                        </div>
                        <Link>  <p className="text-[#3a67ae]   font-semibold text-[16px]">{trainerName}</p></Link>
                    </div>
                    <div className="flex justify-between pl-4 pr-4 my-1">
                        <div className="flex gap-2 items-center">
                            <span className="text-xl mt-1"><IoBookOutline /></span>
                            <p className="text-[15px] font-semibold  text-zinc-400"> ক্লাস সংখ্যা {totalClasses}</p>
                        </div>
                        <div className="flex gap-2 items-center">

                            <p className="flex justify-end text-[15px] font-semibold text-red-400">$ কোর্স ফি {price}</p>
                        </div>


                    </div>

                    <div className="flex justify-between">
                        <div className="w-7/12">
                            <Link to={`/course/${start_course_name}`}>      <button className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500">
                                <samp className='text-xl'><BiCategoryAlt /></samp> Vew Course Details</button></Link>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart(course)} className="btn btn-outline mx-5 btn-primary text-yellow-600"> <span><FiShoppingCart /></span>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePageCard;