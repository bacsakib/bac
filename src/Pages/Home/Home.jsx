import { Helmet } from "react-helmet-async";
import Category from "../../Components/HomeComponents/Category";
import Hero from "../../Components/HomeComponents/Hero";
import Numbers from "../../Components/HomeComponents/Numbers";
import PopularCourse from "../../Components/HomeComponents/PopularCourse";
import Testimonial from "../../Components/HomeComponents/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Motion Boss | Home </title>
            </Helmet>
            <Hero></Hero>
            <Category></Category>
            <Numbers></Numbers>
            <PopularCourse></PopularCourse>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;