import React, { useEffect, useState } from "react";
import "./updatelist.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function UpdateList() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const jsonData = await response.json();
        console.log("API Response:", jsonData); // Log the response data
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const setLocal = (id, name, email, website) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Website", website);
  };

  return (
    <>
      <div id="div-1">
        <div id="div-2">
          <div id="div-3">
            <div id="div-4">
              <p id="text-1-l">ID</p>
              <p id="text-2">Name</p>
              <p id="text-3">Email</p>
              <p id="text-4">Website</p>
            </div>
            <div id="div-5">
              {data.map((userdata) => {
                const { id, name, email, website } = userdata;

                function handleDel(id) {
                  axios
                    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                    .then(() => {
                      // Remove the deleted item from the data array
                      setData(data.filter((user) => user.id !== id));
                    })
                    .catch((error) => {
                      console.error("Error deleting user:", error);
                    });
                }

                return (
                  <div key={id} id="div-6">
                    <p id="text-5">{id}</p>
                    <p id="text-6">{name}</p>
                    <p id="text-7">{email}</p>
                    <p id="text-8">{website}</p>
                    <NavLink to="/Form">
                      <button
                        id="button"
                        onClick={() => setLocal(id, name, email, website)}
                      >
                        Update
                      </button>
                    </NavLink>
                    <button id="button" onClick={() => handleDel(id)}>
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateList;
