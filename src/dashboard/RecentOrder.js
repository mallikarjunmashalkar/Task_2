import React from "react";

const RecentOrder = () => {
  const userList = [
    {
      ID: "6453",
      USN: "876345",
      Student_Name: "Mallikarjun",
      phone: "0239873553",
      status: "Attended",
      id: 1,
    },
    {
      ID: "2354",
      USN: "748633",
      Student_Name: "Anil",
      phone: "0239873553",
      status: "Absent",
      id: 2,
    },
    {
      ID: "0987",
      USN: "098735",
      Student_Name: "Sagar",
      phone: "0239873553",
      status: "Attended",
      id: 3,
    },
    {
      ID: "1732",
      USN: "253764",
      Student_Name: "Jhon",
      phone: "0985948836",
      status: "Attended",
      id: 4,
    },
    {
      ID: "2538",
      USN: "937651",
      Student_Name: "Keshav",
      phone: "0239873553",
      status: "Absent",
      id: 5,
    },
    {
      ID: "0956",
      USN: "756640",
      Student_Name: "Tivari",
      phone: "0239873553",
      status: "Absent",
      id: 6,
    },
    {
      ID: "2434",
      USN: "099373",
      Student_Name: "Mony",
      phone: "0239873553",
      status: "Attended",
      id: 7,
    },
    {
      ID: "1153",
      USN: "645538",
      Student_Name: "Shamas",
      phone: "0239873553",
      status: "Absent",
      id: 8,
    },
  ];

  return (
    <div className="bg-white px-4 pb-4 rounded-sm border border-gray-200 flex-1 ml-4 mr-4">
      <div className="mt-4">
        <strong>RecentOrder</strong>
      </div>
      <div className="mt-3 ">
        <table className="w-full text-gray-700 mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>USN</th>
              <th>Student Name</th>
              <th>Student Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.ID}</td>
                <td>{order.USN}</td>
                <td>{order.Student_Name}</td>
                <td>{order.phone}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
