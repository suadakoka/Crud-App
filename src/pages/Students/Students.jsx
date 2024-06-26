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
      dateofadmission: "Dec2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },

    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
    {
      name: "Karthi",
      email: "karthi@gmail.com",
      phone: 73054777760,
      enrollnumber: 12345678888,
      dateofadmission: "Dec2021",
    },
  ]);

  return (
    <div className="std">
      {list.map((item, index) => (
        <div className="item" key={index}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.enrollnumber}</p>
          <p>{item.dateofadmission}</p>
          <icon type="edit"></icon>
          <icon type="delete"></icon>
        </div>
      ))}
    </div>
  );
};

export default Students;
