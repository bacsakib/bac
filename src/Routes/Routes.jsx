import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import StartCourse from "../Pages/StartCourse/StartCourse";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyCourse from "../Pages/Dashboard/DasboardMenu/MenuDetails/MyCourse";
import AllCourse from "../Pages/Dashboard/DasboardMenu/MenuDetails/AllCourse";
import MyCart from "../Pages/Dashboard/DasboardMenu/MenuDetails/MyCart";
import AllUser from "../Pages/Dashboard/DasboardMenu/MenuDetails/AllUser";
import AddCourse from "../Pages/Dashboard/DasboardMenu/MenuDetails/AddCourse";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/DasboardMenu/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/DasboardMenu/Payment/PaymentHistory";
import AdminHome from "../Pages/Dashboard/DasboardMenu/MenuDetails/AdminHome";
import UserHome from "../Pages/Dashboard/DasboardMenu/MenuDetails/UserHome";
import BkahPayment from "../Pages/Dashboard/DasboardMenu/Payment/BkahPayment";
import Orders from "../Pages/Dashboard/DasboardMenu/MenuDetails/Orders";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/course",
          element: <Courses></Courses>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path:'course/:start_course_name',
          element: <CourseDetails></CourseDetails>
        },
        {
          path:'/my-course/motionGraphics',
          element:<PrivateRoute><StartCourse></StartCourse></PrivateRoute>
        },
        
       
     
      ],
    },

    {
      path: "/profile",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'userHome',
          element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
      
        {
          path: 'my-course',
          element:<PrivateRoute><MyCourse></MyCourse></PrivateRoute>
        },
        {
          path: 'all-course',
          element:<AdminRoute><AllCourse></AllCourse></AdminRoute>
        },
        {
          path: 'my-cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: 'orders',
          element: <AdminRoute><Orders></Orders> </AdminRoute>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'bkash',
          element:<PrivateRoute><BkahPayment></BkahPayment></PrivateRoute>
        },
        {
          path:'payment-history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path: 'all-user',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: 'add-course',
          element: <AdminRoute><AddCourse></AddCourse></AdminRoute>
        },
        
      ]
    }
    
  ]);