import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CiPlay1 } from "react-icons/ci";

const Course = () => {
    const [selectedVideo, setSelectedVideo] = useState({
        title: 'motion title1',
        vid: 'VJsf81SuJEQ?si=cBBY37BT-gfdisKv',
        classNme: 'Adobe After Effects Basic Interface | Motion Graphics and VFX in After Effects',
        classcount: 'Adobe After Effects Basic Interface | Motion Graphics and VFX in After Effects'
    });

    const motionGraphics = [
        { title: 'ক্লাস ১', vid: 'VJsf81SuJEQ?si=Zh6-azDXsVYCKGP0', classNme: 'Adobe After Effects Basic Interface | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ২', vid: '1bKMxTx1zuE?si=JjnCJAytFf1x1HDk', classNme: 'Understanding Animation Process by a Simple Project | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ৩', vid: 'tLw69muJfBg?si=FcnNankm1_vBVkqY', classNme: 'Understanding Animation Process in After Effects by a Simple Project 02' },
        { title: 'ক্লাস ৪', vid: 'l3DpD-ly3yw?si=F2-Gfy_Y8M-DbcEq', classNme: 'Basic Animation with Position, Rotation Scale and Opacity in After Effects' },
        { title: 'ক্লাস ৫', vid: 'TZE0QEYLEkA?si=Cx51GBv28jFB288X', classNme: ' Basic Animation with Vector Files Adobe After Effects Full Project' },
        { title: 'ক্লাস ৬', vid: 'hQLbHNZhV-s?si=LXSQrZFBxTWa9CsH', classNme: 'How to Use Effects (Tritone) in Adobe After Effects' },
        { title: 'ক্লাস ৭', vid: 'g1e4wihp22U?si=qSqSzT5-98ghbULg', classNme: '0201 Adobe After Effects Full Course Section 01 overview' },
        { title: 'ক্লাস ৮', vid: 'EAG75nIUWeg?si=JJLzDSNGW4cg9KWo', classNme: '0202 How to Create and Edit Text Layers | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ৯', vid: '4WFeSrVJdOU?si=KLred34_myX_ySPH', classNme: '0203 Shape Layer Simple Overview | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ১০', vid: 'JvasTG61jHI?si=MqoMM_5w6E7_w7VM', classNme: '0204 Inside the Shape Layer Basic Overview | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ১১', vid: '6Yy2eQbGYnc?si=AbyAPf2vfpCiHYXD', classNme: '0205 Create Any Shape with Pen Tool | Motion Graphics and VFX in After Effects' },
        { title: 'ক্লাস ১২', vid: 'fiunlMYZeIQ?si=2SYz1uckSBb4ZQg1', classNme: '0206 Everything About Anchor Point | Motion Graphics and VFX in After Effects' },


    ];

    const renderVideo = () => (
        <div className="video-container text-left ">
            <iframe
                className='rounded-xl  w-full h-72 md:h-[490px] lg:w-[820px]'
                title={selectedVideo.title}
            
                src={`//www.youtube.com/embed/${selectedVideo.vid}?rel=0&autoplay=1`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h2 className="mt-8 text-2xl  ">{selectedVideo.classNme}</h2>
            <p className='font-normal text-xl'>{selectedVideo.title}</p>
        </div>
    );

    return (
        <div>
            <Helmet>
                <title>Motion Boss | মোশন গ্রাফিক্স </title>
            </Helmet>
            <div className=" breadcrumbs text-xl my-2 pl-2 w-10/12 mx-auto  ">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Courses</a></li>
                    <li>অ্যাডভান্সড মোশন গ্রাফিক্স</li>
                </ul>
            </div>
            <div className="course-container w-11/12 mx-auto">
                <div className="course-flex-container flex flex-col lg:flex-row justify-between lg:gap-16">
                    <div className='text-4xl font-bold'>
                        <div className="video-section w-12/12">{renderVideo()}</div>
                    </div>
                    <div className="tab-section border-2 border-black-300 mb-5 rounded-lg w-full">
                        <div className="">
                            <div className='flex flex-col h-[600px] overflow-y-scroll'>
                                <h1 className='py-6 text-center text-2xl font-semibold'>কোর্স সিলেবাস</h1>
                                {motionGraphics.map((item, index) => (
                                    <div onClick={() => setSelectedVideo(item)} className={`py-2 outline-dotted outline-1 outline-offset-1 outline-stone-300 ${item.vid === selectedVideo.vid ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-900'} px-4  transition-colors duration-300 ease-in-out hover:bg-blue-200`} key={index}>
                                        <div
                                            href="#!"
                                            className="flex items-center justify-start gap-4 text-xl font-semibold"
                                        >
                                            <span className="mr-2">{item.title}</span>
                                            <span><CiPlay1 /></span>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setSelectedVideo(item)}>
                                            <h3 className=''>{item.classNme}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
