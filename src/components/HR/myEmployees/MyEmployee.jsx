import React from "react";

const MyEmployee = () => {
  // Sample data of employees
  const employees = [
    { name: "John Doe", employeeCode: "EMP001" },
    { name: "Jane Smith", employeeCode: "EMP002" },
    { name: "Michael Johnson", employeeCode: "EMP003" },
    { name: "Emily Davis", employeeCode: "EMP004" },
    { name: "David Wilson", employeeCode: "EMP005" },
    { name: "John Doe", employeeCode: "EMP001" },
    { name: "Jane Smith", employeeCode: "EMP002" },
    { name: "Michael Johnson", employeeCode: "EMP003" },
    { name: "Emily Davis", employeeCode: "EMP004" },
    { name: "David Wilson", employeeCode: "EMP005" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead>
          <tr className="bg-blue-500 hover:bg-blue-700 text-white">
            <th className="border border-gray-800 px-4 py-2">Sno</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Employee Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="bg-gray-50 hover:bg-gray-200">
              <td className="border border-gray-800 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-800 px-4 py-2">
                {employee.name}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                <a className="hover:underline" href={`/employee/${employee.employeeCode}`}>
                  {employee.employeeCode}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEmployee;
