
import { Link, useNavigate } from 'react-router-dom';
import { imageUpload } from '../../Api/utilits';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import GoogleSignin from '../../Components/GoogleSignin/GoogleSignin';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const image = form.image.files[0];


        try {
            // 1.upload image
            // const imageData = await imageUpload(image)
            // 2.Signup User
            const result = await createUser(email, password)
            // 3. Save User
            await updateUserProfile(name)
            // 4. Save user to database
            const userInfo = {
                name:name,
                email:email,
                password:password
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('User added to the database');
                    Swal.fire({
                        title: "Login successfully",
                        text: "Welcome to Bdcalling Academy",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/');
                } 
            })
            .catch(error => {
                console.error('Error while adding user to the database:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to add user to the database. Please try again.",
                    icon: "error"
                });
            });
            console.log(result)
        }
        catch (err) {
            console.log(err)
            Swal.fire({
                title: "Something Wrong",
                text: "Please Try Again",
                icon: "error"
            })
        }

    };
  

    return (
        <div className='flex justify-center items-center min-h-screen py-4 bg-base-100'>
            <Helmet>
                <title>Bdcalling Academy | Signup </title>
            </Helmet>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to StayVista</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'> {/* Corrected htmlFor */}
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        {/* <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                            
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div> */}
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
               <GoogleSignin></GoogleSignin>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;
