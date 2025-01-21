import React from 'react';

const Table = ({ tbody, thead }) => {
  return (
    <table className="w-full shadow-lg rounded-lg bg-slate-100">
      <thead>
        <tr className="border-b text-center">
          {thead.map((header, index) => (
            <th key={index} className="py-3 capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((item, rowIndex) => (
          <tr key={rowIndex} className="border-b-2 text-center">
            {thead.map((key, colIndex) => (
              <td key={colIndex} className="py-3 ps-2">
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
