import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, settype] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState();
  
  const navigate = useNavigate();

  const submitForm = async () => {
    console.log("form submitted!");

    setStatus(false)

    if (!title || !description || !type || !time) {
      alert("please fill the input field!");
      return;
      }
    let result = await fetch("http://localhost:3000/add-task", {
      method: "post",
      body: JSON.stringify({ title, description,type, status, time }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    if(result){
      navigate('/all')
    }

  };


  const handleRadio = (value) => {
    if (value === "1") settype("project");
    else if (value === "2") settype("metting");
    else if (value === "3") settype("personal");
  };

  return (
    <div className="add-container">
      <Typography
        gutterBottom
        variant="h4"
        fontWeight={"bold"}
        style={{
          borderBottom: "1px solid rgb(196, 194, 194)",
          padding: "10px",
          color: "white",
        }}
      >
        Add Task
      </Typography>
      <div className="add-content">
        <div className="input-form">
          <TextField
            varient="outlined"
            type="text"
            label="Enter your task"
            style={{ width: "100%" }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></TextField>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            label="Description"
            style={{ width: "100%" }}
            //  value={description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></TextField>
          <span className="task-radio">
            <input
              type="radio"
              value="1"
              name="radio-btn"
              onChange={(e) => {
                handleRadio(e.target.value);
              }}
            ></input>
            <label>Projects</label>
            <br></br>
            <input
              type="radio"
              value="2"
              name="radio-btn"
              onChange={(e) => {
                handleRadio(e.target.value);
              }}
            ></input>
            <label>Mettings</label>
            <input
              type="radio"
              value="3"
              name="radio-btn"
              onChange={(e) => {
                handleRadio(e.target.value);
              }}
            ></input>
            <label>Personal</label>
          </span>
          <span className="set-time">
            <TextField
              variant="outlined"
              type="text"
              label="Time you need to complete"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></TextField>
            <Button
              variant="contained"
              style={{ padding: "10px", textTransform: "none" }}
              onClick={submitForm}
            >
              Add task
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Add;
