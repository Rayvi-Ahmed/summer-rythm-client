import React from 'react';
import useEnroll from '../../../../Hooks/useEnroll/useEnroll';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {

    const [payments] = useEnroll()
    console.log(payments)
    return (
        <div className="w-full ml-5">
            <div>

                < Helmet >
                    <title>Summer Rythm | Payment History</title>
                </Helmet >
                <h1 className="text-center text-green-700 font-bold text-4xl text-bold">Payment Summery</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Course Name</th>
                            <th>Transection ID</th>
                            <th>date</th>
                            <th>Confirmation code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((pay, index) => <tr key={pay._id}>
                                <th>{index + 1}</th>
                                <td>{pay.courseName}</td>
                                <td>{pay.transactionId}</td>
                                <td>{pay.date}</td>
                                <td>${pay.selectedId}</td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;