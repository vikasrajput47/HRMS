import React, { useState } from "react";

const Dashboard = () => {
  // Sample data for employee
  const employee = {
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main Street, City, Country",
    employeeCode: "EMP001",
    department: "Engineering",
    jobTitle: "Software Developer",
  };

  // State to manage punch status and start time
  const [punchStatus, setPunchStatus] = useState("Punch In");
  const [startTime, setStartTime] = useState(null);

  // Function to handle punch action
  const handlePunch = () => {
    if (punchStatus === "Punch In") {
      const currentTime = new Date().toLocaleTimeString();
      setStartTime(currentTime);
      setPunchStatus("Punch Out");
    } else {
      setStartTime(null);
      setPunchStatus("Punch In");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Welcome {employee.name}
        </h1>
        <div className="flex">
          <h2 className="text-lg sm:text-xl font-bold mr-4 sm:mr-8">
            Holiday List
          </h2>
          <a href="#" className="text-lg sm:text-xl font-bold">
            Logout
          </a>
        </div>
      </div>

      <div className="flex  justify-center items-center">
        <div className="w-full sm:w-max md:w-full  bg-gray-100 rounded-lg shadow-md p-4 sm:p-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mr-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-base sm:text-lg font-semibold flex items-center">
                <span>{employee.name}</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {employee.email}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {employee.phoneNumber}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {employee.department}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {employee.jobTitle}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                {punchStatus}
              </h2>
              <button
                onClick={handlePunch}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded"
              >
                {punchStatus}
              </button>
              <span className="block mt-3 sm:mt-4 text-sm">{startTime}</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                Leave Tracker
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                No leaves scheduled
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                Attendance
              </h2>
              <p className="text-sm sm:text-base text-gray-600">Present</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
                Job Related Info
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                No information available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
