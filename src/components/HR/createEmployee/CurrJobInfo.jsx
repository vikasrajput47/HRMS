import React, { useContext } from "react";
import { Context } from "../../..";

const CurrJobInfo = () => {
  const { formData, setFormData } = useContext(Context);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      {/* Current Job Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Job Information:</h3>
        {/* Current Job Information fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">
              Date of Joining (DOJ):
            </label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Work Authorization:</label>
            <input
              type="text"
              name="workAuthorization"
              value={formData.workAuthorization}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Manager:</label>
            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Employment Type:</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="form-select mt-1 w-full"
            >
              <option value="">Select Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Salary:</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrJobInfo;
