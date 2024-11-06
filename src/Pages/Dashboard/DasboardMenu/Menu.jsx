import { NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const Menu = () => {
    const [isAdmin] = useAdmin();

    // todo get isadmin value in database
    return (
        <div className="flex  overflow-scroll font-lexend flex-row lg:flex-col justify-center text-[15px] px-8 lg:px-4 pb-7 lg:pl-8 gap-4">
            {
                isAdmin ? (
                    <>
                        <NavLink to='adminHome' className="px-2 flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><IoHomeOutline /> Profile</NavLink>
                        <NavLink to='all-course' className="px-2 flex items-center gap-2" activeClassName="border-b-2 border-blue-500"> <IoBookOutline /> All Course  </NavLink>
                        <NavLink to='add-course' className="px-2 flex items-center gap-2" activeClassName="border-b-2 border-blue-500"> <IoIosAddCircleOutline />Add Course </NavLink>
                        {/* <NavLink to='my-cart' className="px-2">My Cart</NavLink> */}
                        <NavLink to='orders' className="px-2 flex items-center gap-2" activeClassName="border-b-2 border-blue-500"> <MdBookmarkBorder /> Orders </NavLink>
                        <NavLink to='all-user' className="px-2 flex items-center gap-2" activeClassName="border-b-2 border-blue-500"> <FaRegUser /> All User </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='userHome' className=" flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><IoHomeOutline /> Profile</NavLink>
                        <NavLink to='my-course' className=" flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><IoBookOutline />My Course</NavLink>
                        <NavLink to='my-cart' className=" flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><IoCartOutline /> Cart</NavLink>
                        <NavLink to='payment-history' className="flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><TbMoneybag />History</NavLink>
                        {/* <NavLink to='bkash' className="flex items-center gap-2" activeClassName="border-b-2 border-blue-500"><TbMoneybag />Bkash Payment</NavLink> */}
                    </>
                )
            }
        </div>
    );
};

export default Menu;
