import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import UserInfo from "./userInfo/UserInfo";
import Menu from "./DasboardMenu/Menu";


const Dashboard = () => {
    

    return (
        <div className="bg-[#ffffff]  ">
            <Navbar></Navbar>
            <div className="flex flex-col lg:flex-row lg:w-10/12 mx-auto font-lexend lg:gap-12 ">
                <div className="lg:w-80 w-full h-5/6 min-h-full bg-[#ECF0F3] rounded-xl lg:py-8 lg:my-12 mt-8 lg:mt-12 mx-auto  ">
                    <UserInfo></UserInfo>
                    <div className="divider opacity-20 w-10/12 mx-auto divider-accent"></div>
                    <Menu></Menu>
                </div>

                <div className="flex-1  p-12 bg-[#ECF0F3] rounded-xl my-4 la:my-12 lg:mt-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;