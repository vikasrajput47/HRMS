import React, { useContext } from "react";
import { Context } from "../../..";

const IndentificationInfo = () => {
  const { formData, setFormData } = useContext(Context);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      {/* Identification Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Identification Information:
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-gray-700">Aadhar Number:</label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">PAN Number:</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndentificationInfo;
