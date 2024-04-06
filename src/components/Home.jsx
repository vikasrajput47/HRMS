// Home.js
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Context } from "..";
import toast from "react-hot-toast";

const Home = () => {
  const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 20;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, cnt, setCnt } = useContext(Context);
  const [genderFilter, setGenderFilter] = useState("all");
  const [domainFilter, setDomainFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/empInfo/allData`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.userData);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.message);
        setIsLoading(false);
      });
  }, []);

  const addToTeam = async (item) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/teams/newTeam`,
        {
          first_name: item.first_name,
          last_name: item.last_name,
          email: item.email,
          gender: item.gender,
          avatar: item.avatar,
          domain: item.domain,
          available: item.available,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.message === "member added") {
        setCnt(cnt + 1);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  const startIndex = (currentPage - 1) * profilesPerPage;
  const endIndex = startIndex + profilesPerPage;
  const totalPages = Math.ceil(Data.length / profilesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const filteredProfiles = Data.filter((item) => {
    const matchesGender =
      genderFilter === "all" || item.gender === genderFilter;
    const matchesDomain =
      domainFilter === "all" || item.domain === domainFilter;
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "true" && item.available) ||
      (availabilityFilter === "false" && !item.available);

    return matchesGender && matchesDomain && matchesAvailability;
  });

  const currentProfiles = filteredProfiles.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="p-6">
            {/* Filter components */}
            <div className="flex space-x-4 mb-4">
              {/* Gender Filter */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <option value="all">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* Domain Filter */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
              >
                <option value="all">All Domains</option>
                <option value="IT">IT</option>
                <option value="Business Development">
                  Business Development
                </option>
                <option value="Finance">Finance</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="UI Designing">UI Designing</option>
              </select>

              {/* Availability Filter */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">All Availability</option>
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>
          </div>

          <div className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <p className="p-4">Loading...</p>
            ) : error ? (
              <p className="p-4">{error}</p>
            ) : (
              currentProfiles.map((item) => (
                <div key={item._id} className="p-4 flex items-center">
                  {/* Profile details */}
                  <div className="flex-1">
                    <p className="text-lg font-semibold">
                      {item.first_name} {item.last_name}
                    </p>
                    <p className="text-sm text-gray-500">{item.email}</p>
                    <p className="text-sm text-gray-500">{item.gender}</p>
                    <p className="text-sm text-gray-500">{item.domain}</p>
                    <p className="text-sm text-gray-500">
                      {item.available ? "Available" : "Not Available"}
                    </p>
                  </div>

                  {/* Add button */}
                  <button
                    className="px-4 py-2 ml-auto bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => addToTeam(item)}
                  >
                    Add to Team
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  {/* Previous button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
                    }
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                      currentPage === 1 ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 3.293a1 1 0 00-1.414 1.414L12.586 10l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Pagination numbers */}
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                        currentPage === number
                          ? "text-indigo-500 bg-indigo-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  {/* Next button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        prev === totalPages ? prev : prev + 1
                      )
                    }
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                      currentPage === totalPages ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 16.707a1 1 0 001.414-1.414L7.414 10l3.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
