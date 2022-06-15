import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Header() {
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };


  return (
    <>
      <nav id="navArea" className={sticky}>
        <div className="logo">
          <a href="#">
            <img src="https://www.correctspace.com/assets/img/correctSpaceC.svg" alt="your company logo" />
          </a>
        </div>
        <ul>
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Header