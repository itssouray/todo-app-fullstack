import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Pending from './pending.png';

function Active() {
  const [activeList, setActiveList] = useState([]);

  useEffect(() => {
    getActiveList();
  });

  const getActiveList = async () => {
    let result = await fetch("http://localhost:3000/tasks");
    result = await result.json();
    setActiveList(result);
    // console.log("active list : ",activeList)
  };

  return (
    <div className="active-task">
      <div className="active-task-list">
        {activeList
          .filter((item) => {
            if (item.status === false) return item;
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
                    <span className="pending-mark">
                        <img src={Pending} alt="pending"></img>
                    </span>

                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "13px" }}
                    >
                      In Progress
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

export default Active;
