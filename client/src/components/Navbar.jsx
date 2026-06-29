// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div>Footer</div>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold">Cravings</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact-us">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
