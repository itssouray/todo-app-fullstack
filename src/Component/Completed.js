import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Checked from './checked.png';

function Completed() {
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    getCompletedList();
  });

  const getCompletedList = async () => {
    let result = await fetch("http://localhost:3000/tasks");
    result = await result.json();
    setCompletedList(result);
  };

  return (
    <div className="completed-task">
      <div className="completed-task-list">
        {completedList
          .filter((item) => {
            if (item.status === true) return item;
          })
          .map((item, index) => {
            console.log("completed list",item)
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
                    <span className="completed-mark">
                        <img src={Checked} alt="checked"></img>
                    </span>

                    <Typography
                      variant="subtitle2"
                      style={{ fontSize: "13px" }}
                    >
                      Completed
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

export default Completed;
