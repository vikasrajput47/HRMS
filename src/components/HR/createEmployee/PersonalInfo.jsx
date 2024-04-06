import { useContext } from "react";
import { Context } from "../../..";

const PersonalInfo = () => {
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
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Personal Information:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Marital Status:</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="form-select mt-1 w-full border"
              required
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalInfo;
