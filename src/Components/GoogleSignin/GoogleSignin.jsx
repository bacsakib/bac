import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleSignin = () => {
    const navigate = useNavigate();
    const { signInWithGoogle } = useAuth(); 
    const axiosPublic = useAxiosPublic()
    const handleGoogleSignin = ()=>{
        signInWithGoogle()
        .then((result) => {
            console.log("Google sign-in successful:", result.user);

            const userInfo = {
                email: result.user.email,
                name:result.user.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
                Swal.fire({
                    title: "Login successfully",
                    text: "Welcome to Motion Boss",
                    icon: "success",
                    timer: 2000
                });
                navigate('/');
            })
              
        })
        .catch((error) => {
            // Handle errors
            console.error("Google sign-in error:", error);
            Swal.fire({
                title: "Something Wrong",
                text: "Please Try Again",
                icon: "error"
            });
        });
    }
    return (
        <div className="card-body -mt-16">
        <button onClick={handleGoogleSignin} className="btn border text-[16px] w-full mb-2 text-[#1d3153]">
            <FaGoogle className=' text-[#EB4235]' />
            Log in with Google
        </button>
    </div>
    );
};
export default GoogleSignin;