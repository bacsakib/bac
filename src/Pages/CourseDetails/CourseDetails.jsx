import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import LeftTile from '../../Components/CourseDetailsC/LeftTile';
import CourseTopic from '../../Components/CourseDetailsC/CourseTopic';
import TrainerSection from '../../Components/CourseDetailsC/TrainerSection';
import { Helmet } from 'react-helmet-async';

const CourseDetails = () => {
    const { start_course_name } = useParams()
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    const [course, setCourse] = useState({})
    const [loaing, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => {
                const filterCourse = data.find(item => item.start_course_name === start_course_name)
                setCourse(filterCourse)
                setLoading(false)
            })
    }, [start_course_name])
    if (loaing) return <Loader></Loader>
    return (
        <div >
            <Helmet>
                <title>Motion Boss | Course Details </title>
            </Helmet>

            <div className='bg-gradient-to-r  from-cyan-50 to-blue-50 py-4'>
                <div className=" breadcrumbs  pl-4 w-10/12 mx-auto ">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li>{course.courseName}</li>
                    </ul>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between w-10/12 mx-auto my-12  '>
                    <LeftTile courseId={course.start_course_name} course={course}></LeftTile>
                    <div><img className='w-[620px] rounded-2xl' src={course.thumbnail_url} alt="" /></div>

                </div>
            </div>

            <div className='my-20 gap-12 w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center   '>
                <CourseTopic></CourseTopic>
                <TrainerSection></TrainerSection>
            </div>
            <div className='w-10/12 mx-auto '>
                <div className=' border-2 p-12 mb-12 w-8/12'>
                    <h3 className="text-4xl font-semibold my-8 ">কোর্স ওভারভিউ</h3>
                    <p>কোনো অ্যাপ বা সাইটের কোথায় কি কি অপশন থাকতে পারে তার ডিজাইন করা হয় UX/UI এর মাধ্যমে। স্মার্ট কাজ আর
                        ভাল স্যালারির জন্য তা UX/UI ডিজাইনারদের চাহিদাও বেড়েছে কয়েকশ গুণ।
                        <br />

                        তাই আমাদের কোর্সে আপনার হাতেখড়ি হবে প্রাথমিক স্কেচিং দিয়ে। কিভাবে কোন ওয়েবসাইট, অ্যাপ বা ব্যানারের
                        ডিজাইন করবেন তার ফ্লোচার্ট তৈরি করতে শিখবেন এখানে। এছাড়াও, আপনি ট্রেন্ডি সফ্টওয়্যার Adobe XD এবং Figma
                        ব্যবহার শিখতে পারেন UX/UI ডিজাইন কোর্সের মাধ্যমে। কোর্সের প্রোজেক্টগুলো সম্পন্ন করে, কোর্স শেষে আপনি
                        নিজের পোর্টফোলিও তৈরি করতে পারবেন ক্লাস থেকেই। ক্যারিয়ারের শুরুতে এই পোর্টফোলিও-ই হবে আপনার
                        দক্ষতার মাইলফলক।</p></div>

            </div>
        </div>
    );
};

export default CourseDetails;