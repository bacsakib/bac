import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaBook,  FaUsers } from 'react-icons/fa';
import { TbCurrencyTaka } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: adminPaymentInfo = [], refetch } = useQuery({
        queryKey: ['adminPaymentInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminPaymentInfo');
            return res.data;
        }
    })
    console.log(adminPaymentInfo)


    return (
        <div>
            <Helmet>
                <title>Motion Boss | Admin Home </title>
            </Helmet>
            <div className="stats shadow flex flex-col md:flex-row gap-8">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        < TbCurrencyTaka className="text-4xl mt-2"></TbCurrencyTaka>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>

                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Total Course</div>
                    <div className="stat-value">{stats.courses}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{adminPaymentInfo.length}</div>
                </div>

            </div>
         
        </div>
    );
};

export default AdminHome;