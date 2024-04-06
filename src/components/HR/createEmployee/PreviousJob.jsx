import React, { useContext } from "react";
import { Context } from "../../..";

const PreviousJob = () => {
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
      {" "}
      {/* Previous Employment History Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Previous Employment History:
        </h3>
        {/* Previous Employment fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Previous Employers:</label>
            <input
              type="text"
              name="previousEmployers"
              value={formData.previousEmployers}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Titles:</label>
            <input
              type="text"
              name="jobTitles"
              value={formData.jobTitles}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Dates of Employment:</label>
            <input
              type="text"
              name="datesOfEmployment"
              value={formData.datesOfEmployment}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Responsibilities:</label>
            <input
              type="text"
              name="jobResponsibilities"
              value={formData.jobResponsibilities}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousJob;
