import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import useBkashInfo from "../../../../Hooks/useBkashInfo";
import MyCourseCart from "./MyCourseCart";



const MyCourse = () => {
    const [paymentInfo, refetch] = useBkashInfo()
    console.log(paymentInfo)
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4">  My Courses </h3>
                    <CgProfile className="text-blue-400" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>
            <div className="flex flex-col md:flex-row gap-8">
                {
                    paymentInfo.map(course=> <MyCourseCart key={course.id} course={course}></MyCourseCart>)
                }
            </div>
        </div>
    );
};

export default MyCourse;