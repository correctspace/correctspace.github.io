import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
      <Link to="/">Correct Space</Link>
        <div className="header-right">
        <Link className="active" to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header