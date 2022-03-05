import React from "react";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="bg-primary w-full h-[55px] rounded-t-2xl flex justify-between">
      <img src={logo} alt="" />
      <div className="self-center px-5 flex flex-row">
        <span className="px-3">
          <i class="fa-solid fa-plus text-[white]"></i>{" "}
        </span>
        <span className="px-3">
          <i class="fa-solid fa-circle-user text-[white]"></i>
        </span>
        <span className="px-3">
          <i class="fa-solid fa-bell text-[white]"></i>
        </span>
        <span className="px-3">
          <i class="fa-solid fa-gear text-[white]"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
