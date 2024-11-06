import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CourseCard from "../Shared/CourseCard/CourseCard";


const PopularCourse = () => {
    const [courses , getCourse] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=> res.json())
        .then(data=> getCourse(data))
        
       
    },[])
    return (
        <div className="mb-8 mt-24">
            <SectionTitle title={'জনপ্রিয় কোর্স সমূহ'} subtitle={'আমাদের সেরা করছে জয়েন হয়ে আজ শুরু করুন আপনার স্মার্ট ক্যারিয়ার'}></SectionTitle>

            <div className="grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  w-10/12 mx-auto">
                {
                    courses.map(course=> <CourseCard key={course.courseId} course={course}></CourseCard> )
                }
            </div>
        </div>
    );
};

export default PopularCourse;