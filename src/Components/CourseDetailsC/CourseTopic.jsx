
const CourseTopic = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg w-full lg:px-12 py-8 h-96 lg:w-7/12 px-6 ">
            <div><h3 className="text-4xl font-semibold my-8">কোর্স কারিকুলাম</h3></div>
            <div className="flex justify-between   lg:pr-24 text-[17px] pl-2">
                <ul className="flex flex-col gap-1 ">
                    <li className="flex gap-3"> <input type="checkbox" />  2D Motion Graphics </li>
                    <li className="flex gap-3"> <input type="checkbox" />  Video Editing </li>
                    <li className="flex gap-3"> <input type="checkbox" />  3D Motion Graphics </li>
                    <li className="flex gap-3">  <input type="checkbox" /> 2D Motion Graphics </li>
                    <li className="flex gap-3"> <input type="checkbox" /> TVC & Broadcasting </li>
                    <li className="flex gap-3"> <input type="checkbox" />  2D Motion Graphics </li>
                </ul>
                <ul className="flex flex-col gap-1">
                    <li className="flex gap-3"> <input type="checkbox" />  2D Motion Graphics </li>
                    <li className="flex gap-3"> <input type="checkbox" />  Video Editing </li>
                    <li className="flex gap-3"> <input type="checkbox" />  2D Motion Graphics </li>
                    <li className="flex gap-3"> <input type="checkbox" />  3D Motion Graphics </li>
                    <li className="flex gap-3"><input type="checkbox" />  TVC & Broadcasting </li>
                    <li className="flex gap-3"> <input type="checkbox" />  2D Motion Graphics </li>
                </ul>
            </div>
        </div>
    );
};

export default CourseTopic;