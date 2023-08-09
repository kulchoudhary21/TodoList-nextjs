"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
export const LoginBtn = () => {
  const { user, setUser } = useContext(Context);
  const handleClick = () => {
    setUser({});
    redirect("/login");
  };

  return (
    <>
      {user?.id ? (
        <Link href={"/login"} onClick={handleClick}>
          Logout
        </Link>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export const DeleteTaskButton = (id) => {
  const router = useRouter();
  const deleteTask = async () => {
    console.log("idddd", id);
    try {
      const data = await axios.get(`http://localhost:3000/api/delete/${id.id}`);
      console.log("...tyty", data);
      if (data.data.success) {
        router.refresh();
      }
    } catch (err) {
      console.log("errror", err);
    }
  };
  return (
    <>
      <button style={{ width: "100%" }} onClick={() => deleteTask()}>
        Delete
      </button>
    </>
  );
};
