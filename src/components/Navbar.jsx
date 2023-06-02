import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
// import {MdsRoundedMenu} from "react-icons/md";
import {AiOutlineMenu} from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Food Choices", link: "/foodchoice" },
    { name: "Why FoodScanGenius", link: "/fsg" },
    { name: "Social", link: "/social" },
    { name: "About Us", link: "/about" },
    { name: "FAQ", link: "/faq" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full block top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* <div
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800"
        > */}
          {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
      <ion-icon name="logo-ionic"></ion-icon>
      </span>
      Designer */}
          <Link to="/" className="cursor-pointer p-0 m-0">
            <img src="/logo.jpg" alt="Logo" className="w-16 rounded" />
          </Link>
        {/* </div> */}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
          {open ? <IoMdClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                onClick={() => setOpen(!open)}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  // return (
  //  <nav className='bg-slate-600 h-20 w-full flex justify-between content-center'>
  //   <a href="#" className='flex p-2'>
  //     <img src="../../public/logo.jpg" alt="Logo" className='' />
  //   </a>
  //   <ul className='flex items-center justify-center border border-yellow-400'>
  //     <li className='mx-4'><a href="/">Home</a></li>
  //     <li className='mx-4'><a href="/contact">Contact</a></li>
  //     <li className='mx-4'><a href="/why">Why Food Scanner</a></li>
  //     <li className='mx-4'><a href="/faq">FAQ</a></li>
  //   </ul>
  //  </nav>
  // );
};
export default Navbar;
