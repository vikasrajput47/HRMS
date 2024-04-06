import React, { useContext } from "react";
import { Context } from "../../..";

const ContactInfo = () => {
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
      {/* Contact Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Contact:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
              required
            />
          </div>
          {/* Add more fields for contact */}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
