import { IoBookOutline } from "react-icons/io5";
import prePrecordedLogo1 from '../../../public/img/Animation.gif'
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const LeftTile = ({course}) => {
    const {courseName, courseLength, courseClass,courseProject, courseId, start_course_name} = course;
    const handleAddToCart = item =>{
        console.log(item)
    }
    return (
        <div>
            <div className='text-center lg:text-start px-2 '>
                <div className="flex justify-center lg:justify-normal items-center">
                    <span><img className="w-12 -mt-4" src={prePrecordedLogo1} alt="" /></span>
                    <h3 className='text-[17px] text-blue-500 font-semibold my-2'> দেশ সেরা কোর্স পাবেন এখানে</h3>
                </div>
                <div className="mb-2">
                    <span className="text-6xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-500 
                         text-transparent bg-clip-text "> {courseName}</span>
                </div>
                <div className="flex gap-4 my-2">
                    <div className="border-2 py-2 w-44 text-center"><p><span className="text-2xl font-semibold">{courseLength}</span> মাস মেয়াদি</p> </div>
                    <div className="border-2 py-2 w-44 text-center"><p><span className="text-2xl font-semibold">{courseClass}</span> টি ক্লাস </p> </div>
                </div>
                <div className="flex gap-4">
                    <div className="border-2 py-2 w-44 text-center"><p><span className="text-2xl font-semibold">{courseProject}</span> লাইভ প্রজেক্ট</p> </div>
                    <div className="border-2 py-2 w-84 px-3 text-center"><p><span className="text-2xl font-semibold">প্রতি</span>দিন গুগল মিটের মাধ্যমে লাইভ সাপোর্ট</p> </div>
                </div>
                <p className=" mt-8 text-[18px] leading-8" >আমাদের এখানে ক্লাস করুন বাংলাদেশের সব থেকে জনপ্রিয় মোশন গ্রাফিক্স ইউটিউবার <br /> আহসানুল্লাহ শাওন স্যারের সাথে  ।
                        সাথে থাকছে প্রতিদিন দুইবেলা করে গুগল মিটে স্ক্রিন <br /> শেয়ারের মাধ্যমে লাইভ সাপোর্ট,
                        রেকর্ডেড ভিডিও, ফ্রিল্যান্সিং এবং জব প্লেসমেন্ট সাপোর্ট ।
                    </p>

                <div className='flex items-center justify-center lg:justify-start my-6'>
                    <div>
                        <Link to={`/${start_course_name}`}>
                            <button className="btn m-1 text-white bg-gradient-to-r font-semibold text-[16px] from-blue-500 to-cyan-500">
                                <span className="text-xl "><IoBookOutline /></span>
                                Start Your Course</button></Link>
                    </div>
                    <button onClick={()=>handleAddToCart(course)} className="btn btn-outline mx-4 btn-primary text-yellow-600"> <span><FiShoppingCart /></span>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default LeftTile;