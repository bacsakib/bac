import { FiEdit } from "react-icons/fi";
import bkash from '../../../../../public/img/bbbbbbbb.png'
import rocket from '../../../../../public/img/rocket.png'
import nagad from '../../../../../public/img/nagad-log.png'
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

const BkahPayment = () => {
    const axiosPublic = useAxiosPublic();
    const [cart, refetch] = useCart();
    const userEmail = (cart[0]?.email)
    const courseName = (cart[0]?.courseName)
    const courseId = (cart[0]?._id)
    const startCourseName = (cart[0]?.start_course_name)
    const img = (cart[0]?.thumbnail_url)
    const navigate = useNavigate()
    console.log(startCourseName)
    console.log(cart)

    const handleBkashFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const yourPhone = form.yourPhone.value;
        const select = form.select.value;
        const ammount = form.ammount.value;
        const bkashNumber = form.bkashNumber.value;
        const tnxId = form.tnxId.value;

        const paymentTime = moment().tz("Asia/Dhaka").format(); // Generate current timestamp in Dhaka time zone

        const paymentInfo = {
            name: name,
            yourPhone: yourPhone,
            email: userEmail,
            course: courseName,
            courseId: courseId,
            startCourseId : startCourseName,
            courseImg: img,
            mathode: select,
            paymentNumber: bkashNumber,
            ammount: ammount,
            tncId: tnxId,
            paymentTime: paymentTime // Include payment time in payment information
        };

        axiosPublic.post('/paymentInfo', paymentInfo)

            .then(res => {

                if (res.data.insertedId) {

                    console.log('Payment Placed Successfully');
                    Swal.fire({
                        title: "Payment Placed Successfully",
                        text: "Waiting For Admin Apprubal",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/profile/payment-history')

                }
            })
            .catch(error => {
                console.error('Error while adding user to the database:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to add . Please try again.",
                    icon: "error"
                });
            });
    };
    return (
        <div className=" ">
            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4"> Payment </h3>
                    <div className="flex gap-4 justify-center ">
                        <img className="w-10  h-7 border-2 rounded-full p-1" src={bkash} alt="" />
                        <img className="w-10 h-7 border-2 rounded-full p-1" src={rocket} alt="" />
                        <img className="w-9 h-8 border-2 rounded-full p-1" src={nagad} alt="" />
                    </div>
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>
            <div className="font-sakib flex flex-col lg:flex-row justify-between">
                <form onSubmit={handleBkashFormSubmit} className="lg:w-7/12 w-full">
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8 mb-5 md:px-8 lg:pr-16 ">
                            <div className="mb-2">
                                <p className="text-gray-400 mb-[2px]  text-[14px] ">আপনার নাম</p>
                                <input type="text" name="name" placeholder="Type here" className="input input-bordered  w-full input-sm " />
                            </div>
                            <div>
                                <p className="text-gray-400 mb-[2px]  text-[14px] ">পার্সোনাল ফোন নাম্বার</p>
                                <input type="text" name="yourPhone" placeholder="Type here" className="input input-sm input-bordered  w-full " />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8 mt-4 mb-5  md:px-8 lg:pr-16 ">
                            <div className="mb-2">
                                <p className="text-gray-400 mb-[2px]  text-[14px] ">টাকা পাঠানোর মাধ্যম</p>
                                <select name="select" className="select select-info w-full max-w-xs">
                                    <option disabled selected>Select Hare</option>
                                    <option>বিকাশ </option>
                                    <option>রকেট </option>
                                    <option>নগদ</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-gray-400 mb-[2px]  text-[14px] ">টাকার পরিমাণ</p>
                                <input type="text" name="ammount" placeholder="Type here" className="input input-sm input-bordered  w-full " />
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8 mt-4  md:px-8 lg:pr-16 ">
                            <div className="mb-2">
                                <p className="text-gray-400 mb-[2px]  text-[14px] ">টাকা পাঠানোর নাম্বার</p>
                                <input type="text" name="bkashNumber" placeholder="Type here" className="input input-bordered  w-full input-sm " />
                            </div>
                            <div>
                                <p className="text-gray-400 mb-[2px]   text-[14px] ">ট্রানজেকশন আইডি</p>
                                <input type="text" name="tnxId" placeholder="Type here" className="input input-sm input-bordered  w-full " />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6   md:px-8 lg:pr-16">
                        <div>
                            <button className="btn m-1 text-white bg-gradient-to-r font-semibold text-[16px] from-blue-500 to-cyan-500">
                                <input type="submit" className="cursor-pointer" value={'Submit'} />
                            </button>
                        </div>
                    </div>
                </form>
                <div className="w-5/12">

                    <div>
                        <p className="text-center mt-2">বিকাশ/ রকেট/ নগদ (পার্সোনাল)  </p>
                        <p className="font-bold text-3xl text-center ">01730481212</p>
                    </div>
                    <div className="mt-6 ">
                        <h3 className="text-center text-2xl mb-1">গুরুত্বপূর্ণ ইনস্ট্রাকশন</h3>
                        <p className="font-lexend text-[14px]">ফরমটি সঠিকভাবে পূরণ করুন.  01730481212 নাম্বারটি ভালোভাবে চেক করে সেন্ড মানি অথবা দোকান থেকে পাঠালে ক্যাশ ইন করুন.
                            টাকা পাঠানোর ১২ ঘন্টার ভিতরে আপনাকে কোর্স এপ্রোভাল দিয়ে দেওয়া হবে.
                        </p>
                        <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>
                        <div className="mt-16">
                            <p>দ্রুত ইনফরমেশনের জন্য</p>
                            <div className="flex gap-1 items-center font-semibold">
                                <IoMdCall className="text-[#2196F3]" />
                                <FaWhatsapp className="text-[#2AB13F]" />
                                <p>01730481212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BkahPayment;