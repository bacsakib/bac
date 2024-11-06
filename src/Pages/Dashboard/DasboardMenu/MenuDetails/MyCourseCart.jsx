import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyCourseCart = ({ course }) => {
    const { startCourseId, courseImg } = course;
    const isDisabled = true; // Set this based on your condition

    return (
        <div disabled className="">
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure>
                    <img src={courseImg} alt="course" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{course.course}</h2>
                    <div className="flex justify-between">
                        <div className="w-full">
                            {isDisabled ? (
                                <button disabled className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500 cursor-not-allowed">
                                    <samp className='text-xl'><BiCategoryAlt /></samp> Course Panding...
                                </button>
                            ) : (
                                <Link to={`/my-course/${startCourseId}`}>
                                    <button className="btn text-white bg-gradient-to-r w-full font-semibold text-[16px] from-cyan-500 to-blue-500">
                                        <samp className='text-xl'><BiCategoryAlt /></samp> Start Course
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourseCart;
