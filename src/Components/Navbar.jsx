import React from "react";

const Navbar = () => {
  return (
    <div className=" navbar  flex justify-between items-center py-4">
      <h1 className=" text-lg text-gray-700">Hello Shahrukh👋,</h1>
      <div className=" bg-white text-center px-2 py-1 rounded-md shadow-sm ">
        <i class="fa-solid fa-magnifying-glass" style={{ color: "gray" }}></i>
        <input
          type="text"
          className=" border-none bg-none ml-1"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
