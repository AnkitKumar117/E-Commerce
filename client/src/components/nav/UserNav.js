import React from "react";
import { Link } from "react-router-dom"; 

const UserNav = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-items">
          <Link to="history" className="nav-link">History</Link>
        </li>
        <li className="nav-items">
          <Link to="password" className="nav-link">Password</Link>
        </li>
        <li className="nav-items">
          <Link to="wishlist" className="nav-link">Wishlist</Link>
        </li>
      </ul>
    </nav>
  );
};
export default UserNav;
