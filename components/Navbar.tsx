import React from "react";

const Navbar = () => {
  const notification =
    "This is an example of a notification message. It can be used to promote a specific campaign, etc.";
  return (
    <header className="fixed top-0 h-[90px] bg-light w-full">
      <div className="notification-bar">{notification}</div>
      <div className="flex justify-between bg-transparent px-[10px] md:px-[50px] py-[10px]">
        <div className="company-logo" />
        <div className="menu-icon" />
      </div>
    </header>
  );
};

export default Navbar;
