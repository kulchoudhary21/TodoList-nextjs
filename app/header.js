import React from "react";
import "../style/header.scss";
import Link from "next/link";
import {LoginBtn} from "../components/client/client"
function Header() {
  return (
    <>
      <div className="header">
        <div>
          <h2>Todo</h2>
        </div>
        <article>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <LoginBtn/>
        </article>
      </div>
    </>
  );
}

export default Header;
