import React, { useContext } from "react";
import { Context } from "../../..";

const BankingInfo = () => {
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
      {/* Banking Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Banking Information:</h3>
        {/* Banking Information fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Bank Account Number:</label>
            <input
              type="text"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Holder Name:</label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className="form-input mt-1 w-full border  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingInfo;
