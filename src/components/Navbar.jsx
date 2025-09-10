import LogoDark from "../assets/img/Dark Mode Images/Logo-Dark.png";
import LogoLight from "../assets/img/Light Mode Images/Logo-Light.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

import { HiHome, HiOutlineBriefcase } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { PiBooksLight } from "react-icons/pi";


import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const mobileIcons =[
    {icon : <HiHome size={24} />, link : '/' },
    {icon : <CiUser size={24} />, link : '/about' },
    {icon : <HiOutlineBriefcase size={24} />, link : '/work' },
    {icon : <IoIosMail size={24} />, link : '/contact' },
    {icon : <TiThMenuOutline size={24} />, link : '/stack' },
    {icon : <PiBooksLight size={24} />, link : '/books' },
  ]

  return (
    <div className="header">
      <nav className="fixed w-full max-w-[1024px] lg:flex hidden justify-between rounded-[12px] px-[16px] pt-[16px] mt-[27px] bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(24,24,29,0.3)] border border-[rgba(255,255,255,0.25)] dark:border-[rgba(94,94,94,0.38)]">
        <div className="main-nav flex gap-[40px]">
          <div className="logo">
            <Link to="/">
              <img
                className="w-[40px]"
                src={theme === "dark" ? LogoDark : LogoLight}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="flex gap-[40px]">
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-[16px]">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-[16px]">
              <NavLink to="/work">Work</NavLink>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-[16px]">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium flex items-center gap-[4px] group relative pb-[16px] relative">
              More
              <FaAngleDown size={14} className="absolute top-[6px] right-[-18px] "/>
              <ul className="sub-nav bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(24,24,29,0.6)] absolute top-[40px] left-[-68px] rounded-b-[12px] w-[133px] px-[24px] py-[16px] invisible group-hover:visible">
                <li className="mb-[16px] ">
                  <NavLink to="/books">Bookshelf</NavLink>
                </li>
                <li>
                  <NavLink to="/stack">Tech Stack</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-nav">
          <ul className="flex gap-[24px]">
            <li>
              <a href="https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197" target="_blank">
                <FaLinkedin className="w-[22px] h-[22px] text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_._.blood_pearl._._/" target="_blank">
                <GrInstagram className="w-[22px] h-[22px]  text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/uthiramuthu29" target="_blank">
                <FaGithub className="w-[22px] h-[22px]  text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FiSun className="w-[22px] h-[24px] text-[#C3BDB8] cursor-pointer" />
                ) : (
                  <FiMoon className="w-[22px] h-[24px] text-[#5D5751] cursor-pointer" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="logo bg-[rgba(255,255,255,0.1)] fixed w-auto left-[16px] right-[16px] py-[10px] rounded-[12px] mt-[32px] block lg:hidden">
        <Link to="/">
              <img
                className="w-[46px] mx-auto"
                src={theme === "dark" ? LogoDark : LogoLight}
                alt="Logo"
              />
            </Link>
      </div>
      <nav className="fixed bottom-[16px] w-auto left-[16px] right-[16px] block lg:hidden bg-[rgba(24,24,29,0.3)] dark:bg-[rgba(24,24,29,0.6)] border border-[rgba(39,38,44,0.3)] dark:border-[rgba(39,38,44,0.38)] rounded-[12px]  ">
        <ul className="flex justify-between px-[16px] py-[10px] ">
          {mobileIcons.map((item, index) => {
             return <li key={index} className="text-[#F3F3F3]  "><NavLink className={({ isActive }) => `block px-[16px] py-[8px] rounded-[12px] ${isActive ? "bg-[rgba(255,255,255,0.1)]" : ""}` } to={item.link}>{item.icon}</NavLink></li>
          })}          
        </ul>
      </nav>
    </div>
  );
}
