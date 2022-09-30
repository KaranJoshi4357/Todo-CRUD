import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UpdateNote from "./UpdateNote";

const Notes = () => {
  const [note, setNote] = useState([]);
  const token = localStorage.getItem("psc_token");
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://evening-sierra-88015.herokuapp.com/note", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setNote(res))
      .catch((err) => console.log(err));
  };
  const deleteNote = (id) => {
    fetch(`https://evening-sierra-88015.herokuapp.com/note/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => getData(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  if (!localStorage.getItem("psc_token")) {
    return (
      <h1>
        Please <Link to={"/login"}>Login</Link>{" "}
      </h1>
    );
  }
  return (
    <div>
      <h1>Notes Here</h1>
      {note &&
        note.map((note) => {
          return (
            <div
              key={note._id}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <p>{note.heading}</p>
              <button
                style={{ height: "25px" }}
                onClick={() => deleteNote(note._id)}
              >
                delete
              </button>
              <button
                style={{ height: "25px" }}
                onClick={() => {
                  navigate(`/update/${note._id}`);
                }}
              >
                update
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Notes;
