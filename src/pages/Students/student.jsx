import React from "react";

const Student = ({ name, email, phone, enrollnumber, dateofadmission }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>enroll number {enrollnumber}</p>
      <p>dateofadmission{dateofadmission}</p>
      <icon></icon>
    </div>
  );
};
export default Student;
