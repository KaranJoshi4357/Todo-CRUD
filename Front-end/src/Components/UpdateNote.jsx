import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateNote = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const token = localStorage.getItem("psc_token");
    const param = useParams();
const navigate = useNavigate();

  const createNote = () => {
    const payload = {
      heading,
      note,
      tag,
    };
    fetch(`https://evening-sierra-88015.herokuapp.com/note/edit/${param.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) =>{navigate('/notes')});
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
          required
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
      <button onClick={() => createNote()}>Update</button>
    </div>
  );
};

export default UpdateNote;
