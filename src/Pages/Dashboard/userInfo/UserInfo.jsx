import useAuth from "../../../Hooks/useAuth";

const UserInfo = () => {
    const { user } = useAuth();
    return (
        <div className="bg-[#ECF0F3] my-4 ">
            <div>
                <div className="flex justify-center  ">
                    <img className="rounded-full w-24 h-24 border-8 border-[#52dab1] " src={user?.photoURL} alt="" />
                </div>
                <p className="text-center mt-4 font-bold text-lg ">{user?.displayName}</p>
                <p className="text-center opacity-70 font-semibold">MG-2833</p>
                <p className="text-center  opacity-70 text-sm">{user?.email}</p>
                <p className="text-center  opacity-70 text-sm">Bangladesh</p>
                
            </div>
        </div>
    );
};

export default UserInfo;