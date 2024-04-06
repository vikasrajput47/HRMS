// EmployeeCreateForm.js

import React, { useContext, useState } from "react";
import PersonalInfo from "./HR/createEmployee/PersonalInfo";
import { Context } from "..";
import ContactInfo from "./HR/createEmployee/ContactInfo";
import BankingInfo from "./HR/createEmployee/BankingInfo";
import CurrJobInfo from "./HR/createEmployee/CurrJobInfo";
import EducationInfo from "./HR/createEmployee/EducationInfo";
import IndentificationInfo from "./HR/createEmployee/IndentificationInfo";
import PreviousJob from "./HR/createEmployee/PreviousJob";

const EmployeeCreateForm = () => {
  const { formData, setFormData } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8  bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Employee Creation Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <PersonalInfo />
        <ContactInfo />
        <BankingInfo />
        <CurrJobInfo />
        <EducationInfo />
        <IndentificationInfo />
        <PreviousJob />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreateForm;
