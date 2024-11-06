import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";


const AllCourse = () => {
    return (
        <div>
             <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4">  My Profile </h3>
                    <CgProfile className="text-blue-400" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
        </div>
    );
};

export default AllCourse;