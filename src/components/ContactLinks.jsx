import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";


const contactData = [
    {icon : <IoIosMail size={28} />, link : "#"},
    {icon : <FaLinkedin size={28} />, link : "#"},
    {icon : <FaGithub size={28} />, link : "#"},
    {icon : <GrInstagram size={28} />, link : "#"},
    {icon : <ImWhatsapp size={28} />, link : "#"},
    {icon : <PiMicrosoftTeamsLogoLight size={28} />, link : "#"}
]

export default function ContactLinks() {
  return (
    <div className="mb-[69px]">
      <ul className="flex justify-center gap-[43px] max-w-[230px] mx-auto flex-wrap lg:max-w-none lg:mx-0 lg:flex-nowrap ">
        {contactData.map((item, index) => {
            return <li key={index}><a className="text-[#181818] dark:text-[#B6B5B5]" href={item.link}>{item.icon}</a></li>
        })}
      </ul>
    </div>
  )
}
