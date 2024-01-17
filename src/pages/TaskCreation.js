import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    dob: "",
    phone: "",
    mail: "",
    add: "",
    class: "",
  });
  const [headerName, setHeaderName] = useState(
    "Student  Admission Application "
  );
  const words = headerName.split(" ");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postUrl = "https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1";
    const requestData = {
      fname: data.fName,
      lname: data.lName,
      phone: data.phone,
      email: data.mail,
      DOB: data.dob,
      address: data.add,
      class: data.class,
    };

    fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then(console.log);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Added Successful",
      showConfirmButton: false,
      timer: 1500,
    });
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
            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-10 ">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={data.fName}
                  onChange={handleInput}
                  name="fName"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student First Name"
                  required
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
                  value={data.lName}
                  onChange={handleInput}
                  name="lName"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student Last Name"
                  required
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
                  type="date"
                  value={data.dob}
                  onChange={handleInput}
                  name="dob"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student DOB"
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={data.add}
                  onChange={handleInput}
                  name="add"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student Address"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={data.mail}
                  onChange={handleInput}
                  name="mail"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student Mail"
                  required
                />
              </div>

              <div>
                <label
                  for="website"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="number"
                  value={data.phone}
                  onChange={handleInput}
                  name="phone"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Student Phone Number"
                  required
                />
              </div>

              <div>
                <label
                  for="phone"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Grade Currently Enrolled In
                </label>
                <select
                  value={data.class}
                  onChange={handleInput}
                  name="class"
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option selected>Choose a Sem</option>
                  <option value="1st Sem">1st Sem</option>
                  <option value="2nd Sem">2nd Sem</option>
                  <option value="3rd Sem">3rd Sem</option>
                  <option value="4th Sem">4th Sem</option>
                  <option value="5th Sem">5th Sem</option>
                  <option value="6th Sem">6th Sem</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4"
              >
                Add
              </button>
              <Link to="/home">
                <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
