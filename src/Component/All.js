import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {useParams} from 'react-router-dom'
import { type } from "@testing-library/user-event/dist/type";

function All() {
  const [all, setAll] = useState([]);
  const [newstatus,setNewStatus] = useState();
  const params = useParams();

  useEffect(() => {
    getAllList();
  });

  async function getAllList() {
    let result = await fetch("http://localhost:3000/tasks");
    result = await result.json();
    setAll(result);
  }

  async function updateStatus(id){
    params.id=id
    setNewStatus(true)
    console.log("id : ",typeof id)
    let result = await fetch(`http://localhost:3000/tasks/${params.id}`,{
      method:'Put',
      body:JSON.stringify({title:all.title,description:all.description,type:all.type,status:newstatus,time:all.time}),
      headers:{
          'Content-Type':'application/json'
      }
  })
  result= await result.json()
  console.log("updated status :",result)
    getAllList()
  }


  return (
    <div id="all" className="all">
      <div className="all-task-list">
        {all.map((item, index) => {
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
                <Typography variant="subtitle2">{item.description}</Typography>
              </span>
              <span className="bottom-details">
                <span className="time">
                  <AccessTimeFilledIcon
                    fontSize="small"
                    style={{ color: "rgb(241, 223, 30)" }}
                  />
                  <Typography variant="subtitle2" style={{ fontSize: "12px" }}>
                    {item.time}
                  </Typography>
                </span>
                <span className="status">
                  { item.status?
                    <input type="checkbox" checked={true}></input>
                    :
                    <input type="checkbox" checked={newstatus} onChange={()=>{updateStatus(item._id)}}></input>
                  }
                  <Typography variant="subtitle2" style={{ fontSize: "13px" }}>
                    {item.status === true ? "Completed" : "In Progress"}
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

export default All;
