import React from "react";
import { useContext } from "react";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";

function Home() {
  const user = JSON.parse(Cookies.get("user"));

  return (
    <div className="Home">
      <Navbar user={user.email} />
      <Image />
    </div>
  );
}

export default Home;
