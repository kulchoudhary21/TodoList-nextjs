"use client";
import React, {  useContext, useState } from "react";
import { Context } from "../../components/client/client";
import "../../style/login.scss";
import Link from "next/link";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import {redirect} from "next/navigation"
function Login() {
  const [userdata,setUserData]=useState({email:'',passwd:''})
  const {user,setUser}=useContext(Context)
  const check=async() =>{
    try{
      console.log("usususus",user)
      const data=await axios.post("http://localhost:3000/api/login",userdata)
      console.log("data...",data)
      if(data.data.success){
        console.log("done..",data)
        setUser(data.data.userdata)
      } 
      else{
        alert("failed to login")
      }
    }
    catch(err){
        console.log("error",err)
    }
  }
  if(user?.id) return redirect("/")
  const handleChange=(e)=>{
    setUserData({...userdata,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <form className="login">
        <div>
          <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
        </div>
        <div>
          <input type="password" name="passwd" placeholder="password" onChange={handleChange}></input>
        </div>
        <div>
          <button className="btn btn-primary" type="button" onClick={()=>check()}>Login</button>
          <p>OR</p>
          <Link href={"/register"}>New User</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
