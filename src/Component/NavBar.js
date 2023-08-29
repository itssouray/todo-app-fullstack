import { Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import AddBoxIcon from "@mui/icons-material/AddBox";
import todo from "./todo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function NavBar() {
    const [isVisible,setisVisible] = useState(false);

    const toggle = ()=>{
      setisVisible(!isVisible);
    }

  return (
    <div className="nav-bar">
      
      <span className="top-nav">
        
        <span className="logo">
          <img src={todo} alt="logo"></img>
        </span>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", padding: "20px 0px" }}
        >
          ToDo
        </Typography>
      </span>

      



      <span className="bottom-nav">
        <ul className="nav-bar-icons">
          <li className="icon-list">
            <NavLink className="nav-link" to="/">
              <DashboardIcon
                fontSize="large"
                style={{ width: "15%" }}
              ></DashboardIcon>
              <Typography className="headText" variant="subtitle1" style={{ width: "70%%" }}>
                Dashboard
              </Typography>
            </NavLink>
          </li>
          <li className="icon-list">
            <NavLink className="nav-link" to="add">
              <AddBoxIcon
                fontSize="large"
                style={{ width: "15%" }}
              ></AddBoxIcon>
              <Typography variant="subtitle1" style={{ width: "70%%" }}>
                Add
              </Typography>
            </NavLink>
          </li>
          <li className="icon-list">
            <NavLink className="nav-link" to="project">
              <CodeIcon fontSize="large" style={{ width: "15%" }}></CodeIcon>
              <Typography variant="subtitle1" style={{ width: "70%%" }}>
                Project
              </Typography>
            </NavLink>
          </li>
          <li className="icon-list">
            <NavLink className="nav-link" to="metting">
              <HandshakeIcon
                fontSize="large"
                style={{ width: "15%" }}
              ></HandshakeIcon>
              <Typography variant="subtitle1" style={{ width: "70%%" }}>
                Metting
              </Typography>
            </NavLink>
          </li>
          <li className="icon-list">
            <NavLink className="nav-link" to="personal">
              <SwitchAccountIcon
                fontSize="large"
                style={{ width: "15%" }}
              ></SwitchAccountIcon>
              <Typography variant="subtitle1" style={{ width: "70%%" }}>
                Personal
              </Typography>
            </NavLink>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default NavBar;
