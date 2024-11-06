import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import useBkashInfo from "../../../../Hooks/useBkashInfo";

const PaymentHistory = () => {
    const [paymentInfo, refetch] = useBkashInfo();

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center pr-6">
                <div className="text-xl flex items-center gap-4">
                    <h3 className=" bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text  gap-4">  My Payment History</h3>
                    <CgProfile className="text-blue-400" />
                </div>
                <div><FiEdit className="text-blue-500" /></div>
            </div>
            <div className="divider opacity-20 w-12/12 mx-auto divider-accent"></div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Time</th>
                            <th>Course Name</th>
                            <th>Payment Number</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentInfo.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>{payment.paymentTime}</td> {/* Display the payment time */}
                                <td>{payment.course}</td>
                                <td>{payment.paymentNumber}</td>
                                <td>{payment.ammount}</td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
