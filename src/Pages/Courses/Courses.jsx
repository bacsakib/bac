import { useEffect } from "react";
import { useState } from "react";
import TopTite from "../../Components/CoursesComponents/TopTite";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from "../../Components/Loader/Loader";
import CoursePageCard from "../../Components/CoursesComponents/CoursePageCard";
import { Helmet } from "react-helmet-async";


const Courses = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

      
    const [tabIndex, setTabIndex] = useState(0)
    const [courses, getCourse] = useState([])
    const [ loaing, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => {
                getCourse(data)
            })
            setLoading(false)
    }, [])

    const onlineCourse = courses.filter(online => online.categoryName === 'Online Live Course')
    const recordedCourse = courses.filter(online => online.categoryName === 'Pre Recorded Course')

    if(loaing) return <Loader></Loader>;
    return (
        <div className="py-8 bg-gradient-to-l from-cyan-50 to-blue-100  pb-32 ">
            <Helmet>
                <title>Motion Boss | Courses</title>
            </Helmet>
            <TopTite></TopTite>
      


            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-center my-12 flex justify-center gap-16 border-2 p-4 w-10/12 mx-auto shadow-lg'>
                        <Tab className=''> <button className="btn shadow-md">All Course</button> </Tab>
                        <Tab className=''> <button className="btn shadow-md">Online Course</button> </Tab>
                        <Tab className=''> <button className="btn shadow-md">Pre-Recorded Course</button> </Tab>
                    </TabList>

                    <TabPanel><div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  w-10/12 mx-auto'>
                        {courses.map(course => <CoursePageCard key={course.id} course={course}></CoursePageCard>)}
                    </div> </TabPanel>
                    <TabPanel><div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  w-10/12 mx-auto'>
                        {onlineCourse.map(course => <CoursePageCard key={course.id} course={course}></CoursePageCard>)}
                    </div> </TabPanel>
                    <TabPanel><div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  w-10/12 mx-auto'>
                        {recordedCourse.map(course => <CoursePageCard key={course.id} course={course}></CoursePageCard>)}
                    </div> </TabPanel>
                
                </Tabs>
            </div>
        </div>
    );
};

export default Courses;