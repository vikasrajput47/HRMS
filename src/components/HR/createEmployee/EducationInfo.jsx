import React, { useContext } from "react";
import { Context } from "../../..";

const EducationInfo = () => {
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
      {/* Education Background Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Education Background:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">12th Grade:</label>
            <input
              type="text"
              name="twelfthGrade"
              value={formData.twelfthGrade}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
            <label className="block text-gray-700">Institute:</label>
            <input
              type="text"
              name="twelfthGradeInstitution"
              value={formData.twelfthGradeInstitution}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-gray-700">10th Grade:</label>
            <input
              type="text"
              name="tenthGrade"
              value={formData.tenthGrade}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
            <label className="block text-gray-700">Institute:</label>
            <input
              type="text"
              name="tenthGradeInstitution"
              value={formData.tenthGradeInstitution}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-gray-700">Bachelor's Degree:</label>
            <input
              type="text"
              name="bachelorsDegree"
              value={formData.bachelorsDegree}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
            <label className="block text-gray-700">Institute:</label>
            <input
              type="text"
              name="bachelorsDegreeInstitution"
              value={formData.bachelorsDegreeInstitution}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-gray-700">Others:</label>
            <input
              type="text"
              name="otherDegree"
              value={formData.otherDegree}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
            <label className="block text-gray-700">Institute:</label>
            <input
              type="text"
              name="otherDegreeInstitution"
              value={formData.otherDegreeInstitution}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInfo;
