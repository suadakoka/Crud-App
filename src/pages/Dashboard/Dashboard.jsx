import React from "react";
import "./Dashboard.css";

import Students from "../Students/Students";

export function Dashboard() {
  //   <Students />;

  return (
    <>
      <div className="dashboard">
        <p>Users List</p>
        {/* //{" "}
        <ul>
          <a>Name</a>
          <a>Email</a>
          <a>Phone</a>
          <a>Enroll Number</a>
          <a>Date of admission</a>
        </ul> */}
      </div>
      <Students />
    </>
  );
}

export default Dashboard;
