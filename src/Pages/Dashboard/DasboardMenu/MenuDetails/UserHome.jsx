import useAuth from "../../../../Hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const UserHome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4">  My Profile </h3>
                    <CgProfile className="text-blue-400" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>


            <div className="flex justify-between md:px-8 lg:pr-16 ">
                <div className="mb-2">
                    <p className="text-gray-400 text-[14px] ">Full Name</p>
                    <p className="">{user?.displayName}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-[14px] ">Email Address</p>
                    <p className="">{user?.email}</p>
                </div>
            </div>

            <div className="flex  justify-between md:px-8 lg:pr-16 mt-8">
                <div>
                    <p className="text-gray-400 text-[14px] ">Student Id</p>
                    <p className="">MG-2403</p>
                </div>
                <div className="  mr-6">
                    <p className="text-gray-400 text-[14px] ">Phone </p>
                    <p className="">+8801700000123</p>
                </div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>

            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4"> My Popular Course </h3>
                    <IoBookOutline className="text-blue-400" />
                </div>
                    <div>
                        
                    </div>
            </div>

        </div>
    );
};

export default UserHome;