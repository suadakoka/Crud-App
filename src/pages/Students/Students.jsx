import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Students.css";
import { json } from "react-router-dom";

const Students = () => {
  const [list, setList] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const fetchUsers = () => {
    fetch("https://localhost:7092/api/User?Role=0&PageNumber=1&PageSize=100", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const handleCreate = () => {
    fetch("https://localhost:7092/api/User", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: "Test12345$",
        imageUrl: "string",
        createdAt: "2024-07-04T14:41:33.143Z",
      }),
    })
      //     .then((response) => response.json())
      //     .then((data) => this.setUser({ postId: data.id }));

      .then((response) => {
        console.log(response);
        if (response.ok) {
          fetchUsers();
        } else {
          console.error("Failed to Create");
        }
      })
      .catch((error) => console.error("Error Creating", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (index) => {
    fetch(`https://localhost:7092/api/User/${index}`, {
      method: "DELETE",

      // headers:{ "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          fetchUsers();
        } else {
          console.error("Failed to delete");
        }
      })
      .catch((error) => console.error("Error deleting", error));

    // Handle edit logic here
    console.log("Edit student at index", index);
  };

  const handleEdit = (index) => {
    // Handle delete logic here
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const handleInputName = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, name: value });
  };
  const handleInputEmail = (e) => {
    const { email, value } = e.target;
    console.log(email, value);
    setUser({ ...user, email: value });
  };
  console.log(user);

  return (
    <>
      <table id="customers">
        <div className="items">
          <a>Name</a>
          <input
            type="name"
            placeholder="Enter your name"
            id="user-name"
            onChange={handleInputName}
            required
          />
          <a>Email</a>
          <input
            type="email"
            placeholder="Enter your email"
            id="user-email"
            onChange={handleInputEmail}
            required
          />
          <button onClick={handleCreate} type="add">
            Add New Users
          </button>
        </div>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>

              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="icon-btn edit-btn"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="icon-btn delete-btn"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Students;
