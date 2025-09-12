import React from "react";

const Footer = () => {
  return (
    <nav className="navbar bg-primary text-center" data-bs-theme="dark">
      <div className="container-fluid">
        <p className="navbar-brand h1">
          {" "}
          Carlos Maynor Romero - &copy; {new Date().getFullYear()}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
