import React, { useEffect, useState } from "react";
import "./update.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateForm() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [website, setWeb] = useState();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setWeb(localStorage.getItem("Website"));
  }, []);

  const navlist = useNavigate();

  const handleUpdate = (h) => {
    h.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name,
        email,
        website,
      })
      .then(() => {
        navlist("/");
      });
  };

  return (
    <>
      <div id="div-1-f">
        <div id="div-2-f">
          <form action="" id="form">
            <p id="text-1">Update Form</p>
            <div id="div-3-f">
              <input
                id="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(n) => setName(n.target.value)}
              />
              <input
                id="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="input"
                type="text"
                placeholder="Website"
                value={website}
                onChange={(w) => setWeb(w.target.value)}
              />
            </div>
            <div id="div-4-f">
              <div id="div-5-f">
                <input type="checkbox" id="checkbox" />
                <a href="#" id="anchor-1">
                  Accept Terms & Condition
                </a>
              </div>
            </div>
            <button id="submit" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
