import React from "react";

const SideBar = () => {
  const Menus = [
    { title: "Dashboard", src: "/image/icons/dash2.png" },
    { title: "Products", src: "/image/icons/product.png" },
    { title: "Customers", src: "/image/icons/customer.png" },
    { title: "Income", src: "/image/icons/income.png" },
    { title: "Promote", src: "/image/icons/promote.png" },
    { title: "Help", src: "./image/icons/help.png" },
  ];
  return (
    <div className=" flex max-sm:hidden  flex-col justify-between sidebar w-72  bg-blue-950  pt-8 p-5 ">
      <div>
        <div className=" flex gap-x-4 items-center">
          <img
            style={{
              filter:
                "invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)",
            }}
            src="/image/icons/677777.png"
            className=" w-9"
            alt=""
          />

          <h1 className="text-white  font-medium text-2xl">Dashboard</h1>
        </div>
        <ul className=" p-7">
          {Menus.map((menu, i) => (
            <li
              key={i}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-blue-900 justify-between text-gray-300 text-sm items-center gap-x-4 mt-2  "
            >
              <div className="flex items-center gap-2">
                <img
                  style={{
                    filter:
                      "invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)",
                  }}
                  src={menu.src}
                  className=" w-5 h-5 object-cover "
                  alt=""
                />
                <span className=" text-base text-gray-500">{menu.title}</span>
              </div>
              <div>
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ color: "gray" }}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex p-2 rounded-md  bg-blue-900 items-center gap-0 justify-between">
        <div className="flex gap-2">
          <img
            src="/image/profile.webp"
            className=" w-10 object-cover  rounded-3xl"
            alt=""
          />
          <div className="flex items-start flex-col  ">
            <h1 className=" text-sm text-white">Evano</h1>

            <span className=" text-xs text-gray-400 ">Project Manager</span>
          </div>
        </div>
        <i class="fa-solid fa-angle-down fa-lg p-2 mt-1" style={{color:'gray'}}></i>
        
      </div>
    </div>
  );
};

export default SideBar;
