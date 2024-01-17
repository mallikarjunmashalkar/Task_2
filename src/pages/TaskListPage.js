import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchUserList, deleteUserList } from "./index";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1")
      .then((data) => {
        setUsers(data.data);
      });
    fetchUserList(dispatch);
  }, []);

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`, { state: id });
  };

  const handleView = (id) => {
    navigate(`/view/${id}`, { state: id });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1/${id}`)
      .then(() => {});
    Swal.fire({
      title: "Are you sure?",
      text: "you want to be delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserList(id);
        fetchUserList(dispatch);
        Swal.fire({
          title: "Deleted!",
          text: `User with ID ${id} deleted successfully`,
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div
        style={{ margin: "10px" }}
        className="block w-auto rounded-lg bg-gray-200 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-2">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 20px 0px 20px",
                  }}
                >
                  <label
                    htmlFor="first_name"
                    className="block mt-4 text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    List Of Student
                  </label>
                  <Link to="/create">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-6 mt-4 mb-4">
                      Create +
                    </button>
                  </Link>
                </div>

                <table className="min-w-full text-left text-lg font-light">
                  <thead className="border-b font-bold dark:border-neutral-500 bg-gray-700 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        ID
                      </th>
                      <th scope="col" className="px-10 py-4">
                        Fist Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        DOB
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        E-mail
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Class
                      </th>
                      <th scope="col" className="px-10 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(users) &&
                      users.map((user, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          >
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.id}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.fname}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.lname}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.DOB}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.phone}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.address}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.class}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <button
                                onClick={() => handleView(user)}
                                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2"
                              >
                                {" "}
                                View
                              </button>

                              <button
                                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded mr-2"
                                onClick={() => handleUpdate(user)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                              >
                                {" "}
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
