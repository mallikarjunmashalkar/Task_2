import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ViewData = () => {
  const location = useLocation();
  const data = location.state;
  const [fName, setfName] = useState(data.fname);
  const [lName, setLname] = useState(data.lname);
  const [dob, setDob] = useState(data.DOB);
  const [Phone, setPhone] = useState(data.phone);
  const [mail, setMail] = useState(data.email);
  const [add, setAdd] = useState(data.address);
  const [classs, setClass] = useState(data.class);
  const [headerName, setHeaderName] = useState("Student - Detail's");
  const words = headerName.split(" ");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/home");
  };
  return (
    <>
      <div
        style={{ margin: "10px" }}
        className="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div className="p-6">
          <p
            style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "2px" }}
          >
            <span>{words.slice(0, 2).join(" ")}</span>{" "}
            <span style={{ color: "orange", fontWeight: "600" }}>
              {words[2]}
            </span>{" "}
            <span>{words.slice(3).join(" ")}</span>
          </p>
        </div>
        <div className="grid place-items-center ">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2 ">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={fName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lName}
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  DOB
                </label>
                <input
                  type="text"
                  value={dob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  value={Phone}
                  name="dueDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  value={mail}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={add}
                  name="dueDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>

              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Class
                </label>
                <input
                  type="text"
                  value={classs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-96 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewData;
