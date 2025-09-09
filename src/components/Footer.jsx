import LogoDark from "../assets/img/Dark Mode Images/Logo-Dark.png";
import LogoLight from "../assets/img/Light Mode Images/Logo-Light.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function Footer() {

  const { theme } = useContext(ThemeContext);

  const navLinksOne = [
    { text: "About", link: "/about" },
    { text: "Work", link: "/work" },
    { text: "Contact", link: "/contact" },
  ];

  const navLinksTwo = [
    { text: "Email", link: "/" },
    { text: "LinkedIn", link: "/" },
    { text: "GitHub", link: "/" },
    { text: "Whatsapp", link: "/" },
    { text: "Instagram", link: "/" },
  ];

  return (
    <>
      <div className="footer border-t border-[rgba(0,0,0,0.1)] dark:border-t-[rgba(255,255,255,0.1)] pb-[108px] lg:pb-[42px] pt-[74px] ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="left flex flex-col col-span-1 mt-[32px] lg:mt-0 lg:col-span-4 order-2 lg:order-none">
            <img className="max-w-[92px] mb-[16px] " src={theme === "dark" ? LogoDark : LogoLight} alt="" />
            <p className="text-[14px] text-[#181818] dark:text-[#808080] font-medium mb-[48px] lg:mb-0 ">Thanks for stopping by ッ</p>
            <p className="text-[14px] text-[#181818] dark:text-[#808080] font-medium mt-auto ">© 2025 Uthira Muthu. All Rights Reserved.</p>
          </div>
          <div className="right col-span-1 lg:col-span-4 lg:col-start-9">
            <div className="footer-links flex flex-col-reverse lg:flex-row justify-around">
              <ul>
                <li className="text-[16px] text-[#181818] dark:text-white font-bold mb-[32px] ">
                  <p>Links</p>
                </li>
                {navLinksOne.map((item, index) => {
                  return <li className="text-[16px] text-[#181818] dark:text-[#C5C5C5] font-normal mb-[16px] " key={index}><a href={item.link}>{item.text}</a></li>;
                })}
              </ul>
              <ul>
                <li className="text-[16px] text-[#181818] dark:text-white font-bold mb-[32px] ">
                  <p>Elsewhere</p>
                </li>
                {navLinksTwo.map((item, index) => {
                  return <li className="text-[16px] text-[#181818] dark:text-[#C5C5C5] font-normal mb-[16px] " key={index}><a href={item.link}>{item.text}</a></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
