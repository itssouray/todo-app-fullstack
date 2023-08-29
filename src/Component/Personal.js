import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function Personal() {
  const [personallist, setPersonallist] = useState([]);

  useEffect(() => {
    getPersonalList();
  });

  const getPersonalList = async () => {
    let result = await fetch("http://localhost:3000/tasks");
    result = await result.json();
    setPersonallist(result);
    // console.log(personallist)
  };

  return (
    <div className="personal-container">
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
        Personal
      </Typography>

      <div className="personal-list-container">
        {personallist
          .filter((item) => {
            if (item.type === "personal") return item;
          })
          .map((item, index) => {
            
            return (
              <div key={index} className="task-box">
                <span className="title">
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ color: "rgb(10, 215, 113)", fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                </span>
                <span className="description">
                  <Typography variant="subtitle2">
                    {item.description}
                  </Typography>
                </span>
                <span className="bottom-details">
                  <span className="time">
                    <AccessTimeFilledIcon
                      fontSize="small"
                      style={{ color: "rgb(241, 223, 30)" }}
                    />
                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "12px" }}
                    >
                      {item.time}
                    </Typography>
                  </span>
                  <span className="status">
                    <input type="checkbox" checked={item.status}></input>
                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "13px" }}
                    >
                      {item.status == true ? "Completed" : "In Progress"}
                    </Typography>
                  </span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Personal;
