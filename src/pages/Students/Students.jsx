import React, { useState } from "react";
import "./Students.css";

// import student from "../student/student";

const Students = () => {
  const [list, setList] = useState([
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "08-Dec,2021",
    },
  ]);

  return (
    <>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Enroll Number</th>
          <th>Date of admission</th>
        </tr>

        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.enrollnumber}</td>
              <td>{item.dateofadmission}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Students;
