import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NavLink, Outlet } from "react-router-dom";


function Dashboard() {

  return (
    <div className="dash-board">
      <Typography
        gutterBottom
        variant="h4"
        fontWeight={"bold"}
        style={{
          borderBottom: "1px solid rgb(196, 194, 194)",
          padding: "10px",
          color:'white'
        }}
      >
        Dashboard
      </Typography>
      <div className="container">
        {/* <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="search task..."
          ></input>
        </div> */}
        <div className="search-content"></div>

        
        <div className="task-status">
          <div className="task-status-bar">
            <div className="task-bar-link">
              <Typography style={{ fontWeight: "bold",fontSize:'18px' }} variant="p">
                <NavLink className="status-bar-link" to="all">
                  All
                </NavLink>
              </Typography>
              <Typography style={{ fontWeight: "bold",fontSize:'18px' }} variant="p">
                <NavLink className="status-bar-link" to="active">
                  Active
                </NavLink>
              </Typography>
              <Typography style={{ fontWeight: "bold",fontSize:'18px' }} variant="p">
                <NavLink className="status-bar-link" to="completed">
                  Completed
                </NavLink>
              </Typography>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
