"use client";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {useRouter} from "next/navigation"
import React, { useState } from "react";
import "../style/login.scss";
import axios from "axios";
function AddTodoListForm() {
  const router=useRouter()
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const setTask = async () => {
    try {
      const dataa = await axios.post("http://localhost:3000/api/newtask", data);
        if(dataa?.status=="200"){
            console.log("ADDED")
            setData({...data,title:'',desc:''})
            router.refresh()
        }
        else{
            console.log("Error ...")
        }
    } catch (err) {
      console.log("errr", err);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <Card style={{ width: "50%", background: "antiquewhite" }}>
        <form className="login">
          <div>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              style={{ width: "auto", marginBottom: "20px", marginTop: "20px" }}
              onChange={handleChange}
              value={data.title}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="desc"
              placeholder="Task Description"
              onChange={handleChange}
              style={{ width: "auto" }}
              value={data.desc}
            ></input>
          </div>
        </form>
        <div>
          <button
            onClick={() => setTask()}
            style={{ width: "auto", marginBottom: "20px" }}
          >
            Add
          </button>
        </div>
      </Card>
    </div>
  );
}

export default AddTodoListForm;
