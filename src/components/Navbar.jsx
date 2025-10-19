import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "#",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/*logo section*/}
        <div>
          <h1 className="font-bebas font-bold text-2xl">The coding Journey</h1>
        </div>
        {/*menu section*/}
        <div className=" hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li ky={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className=" w-2 h-2 absolute bg-secondary mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="flex items-center justify-center bg-primary text-white font-semibold rounded-lg hover:bg-secondary duration-200 shadow-[0px_10px_8px_-7px_#f7ba34] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-8">
              <span className="w-full text-center">Sign In</span>
            </button>
          </ul>
        </div>
        {/*mobile hamburger section*/}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl"></IoMdMenu>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
