import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [cnt, setCnt] = useState(0);
  const [formData, setFormData] = useState({

      fullName: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      nationality: "",
    
      email: "",
      phoneNumber: "",
      address: "",
    
    
      aadharNumber: "",
      panNumber: "",
   
    
      otherDegree: "",
      otherDegreeInstitution: "",
      twelfthGrade: "",
      twelfthGradeInstitution: "",
      tenthGrade: "",
      tenthGradeInstitution: "",
      bachelorsDegree: "",
      bachelorsDegreeInstitution: "",
   
    
      previousEmployers: "",
      jobTitles: "",
      datesOfEmployment: "",
      jobResponsibilities: "",
    
   
      bankAccountNumber: "",
      bankName: "",
      accountHolderName: "",
      ifscCode: "",
  
  
      dateOfJoining: "",
      workAuthorization: "",
      jobTitle: "",
      department: "",
      manager: "",
      employmentType: "",
      salary: "",

  });

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        cnt,
        setCnt,
        formData,
        setFormData,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
