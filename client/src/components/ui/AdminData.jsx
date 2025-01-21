import React from 'react';

const AdminData = () => {
    const data = {
        Name: "Prashant Burde",
        ReferenceNo: 6548646845,
        BusinessParomoters: 201,
        BusinesIncome: 105523,
        BusinessParners: 5,
    };

    return (
        <table className="shadow-lg bg-slate-100 rounded-lg w-full">
            <tbody className=''>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key} className='border-b'>
                        <td className='py-3 px-6 text-lg'>{key}</td>
                        <td className='py-3 px-6 text-lg'>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminData;
