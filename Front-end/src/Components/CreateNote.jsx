import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const token = localStorage.getItem("psc_token");
  const navigate = useNavigate();
  const createNote = () => {
    const payload = {
      heading,
      note,
      tag,
    };
    fetch("https://evening-sierra-88015.herokuapp.com/note/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        res ? navigate('/notes') : console.log("note no created");
      });
  };
  return (
    <div>
      <h1>Create Note</h1>
      <div
        style={{
          gap: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>Heading</label>
        <input
          type={"text"}
          placeholder="Enter Heading"
          onChange={(e) => setHeading(e.target.value)}
        />{" "}
        <br />
      </div>
      <br />
      <div
        style={{
          gap: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>Note</label>{" "}
        <textarea
          placeholder="Enter Notes"
          cols="20 "
          rows="3"
          onChange={(e) => setNote(e.target.value)}
        ></textarea>{" "}
        <br />
      </div>
      <br />
      <div
        style={{
          gap: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>Tags</label>
        <input
          type={"text"}
          placeholder="Enter Tags"
          onChange={(e) => setTag(e.target.value)}
        />
        <br />
      </div>
      <br />
      <button onClick={() => createNote()}>Create</button>
    </div>
  );
};

export default CreateNote;
