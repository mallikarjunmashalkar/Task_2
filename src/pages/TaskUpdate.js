import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data, "Huli");
  const navigate = useNavigate();

  const [fName, setfName] = useState(data.fname);
  const [lName, setLname] = useState(data.lname);
  const [dob, setDob] = useState(data.DOB);
  const [Phone, setPhone] = useState(data.phone);
  const [mail, setMail] = useState(data.email);
  const [add, setAdd] = useState(data.address);
  const [classs, setClass] = useState(data.class);
  const [headerName, setHeaderName] = useState(
    "Update  Admission Application "
  );
  const words = headerName.split(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      // id: data.id,
      fname: fName,
      lname: lName,
      phone: Phone,
      email: mail,
      DOB: dob,
      address: add,
      class: classs,
    };
    fetch(`https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message !== "Product with id 'undefined' not found") {
          navigate("/home");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Updated Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div
      style={{ margin: "10px" }}
      className="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    >
      <div className="p-6">
        <p style={{ fontWeight: "bolder", fontSize: "20px", marginTop: "2px" }}>
          <span>{words.slice(0, 2).join(" ")}</span>{" "}
          <span style={{ color: "orange", fontWeight: "600" }}>{words[2]}</span>{" "}
          <span>{words.slice(3).join(" ")}</span>
        </p>
      </div>

      <div className="grid place-items-center">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-10">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="fName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="last_name"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                DOB
              </label>
              <input
                type="date"
                name="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                E-mail
              </label>
              <input
                type="text"
                name="mail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Discription"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <div>
              <label
                for="dueDate"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                name="add"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Class
              </label>
              <select
                value={classs}
                onChange={(e) => setClass(e.target.value)}
                name="catogory"
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
