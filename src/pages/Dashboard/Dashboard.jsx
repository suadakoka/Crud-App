import React from "react";
import "./Dashboard.css";

import Students from "../Students/Students";

export function Dashboard() {
  //   <Students />;

  return (
    <>
      <div className="dashboard">
        <p>Students List</p>
        <ul>
          <a>Name</a>
          <a>Email</a>
          <a>Phone</a>
          <a>Enroll Number</a>
          <a>Date of admission</a>
        </ul>
        <button type="add">Add New Students</button>
      </div>
      <Students />
    </>

    // <div className="dashboard">
    //   <p>Students List</p>
    //   <ul>
    //     <a>Name</a>
    //     <a>Email</a>
    //     <a>Phone</a>
    //     <a>Enroll Number</a>
    //     <a>Date of admission</a>
    //   </ul>
    //   <button type="add">Add New Students</button>
    // </div>
  );
}

export default Dashboard;
