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
    const stickyclassName = scrollTop >= 50 ? "is-sticky" : "";
    setSticky(stickyclassName);
    console.log(stickyclassName);
  };


  return (
    <>
      <nav id="navArea" className={'menu ' + sticky} >
        <div className="logo">
          <a href="#">
            <img src="https://www.correctspace.com/assets/img/correctSpaceC.svg" alt="your company logo" />
          </a>
        </div>
        <ul>
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/about">About</Link></li>
          <li className="menu-item">
          <Link to="">DevOps</Link>
            <ul className="sub-menu">
              <li className="menu-item"><Link to="/service/devops-as-a-service">Devops as a Service</Link></li>
              <li className="menu-item"><Link to="/service/cloud-managed-services">Cloud Managed Services</Link></li>
              <li className="menu-item"><Link to="/service/cloud-computing-services">Cloud Computing Services</Link></li>
            </ul>
          </li>
          <li className="menu-item">
          <Link to="">Cloud</Link>
            <ul className="sub-menu">
              <li className="menu-item"><Link to="/service/public-cloud-services">Public Cloud Services</Link></li>
              <li className="menu-item"><Link to="/service/private-cloud-services">Private Cloud Services</Link></li>
              <li className="menu-item"><Link to="/service/hybrid-cloud-services">Hybrid Cloud Services</Link></li>
              <li className="menu-item"><Link to="/service/disaster-recovery-services">Disaster Recovery Services</Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link to="/pricing">Pricing</Link></li>
          <li className="menu-item"><Link to="/help-faqs">Help & Faqs</Link></li>
          <li className="menu-item"><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Header