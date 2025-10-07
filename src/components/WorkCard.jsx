import rightwhitearrow from '../assets/img/Arrow Right Dark.png'
import rightblackarrow from '../assets/img/Arrow Right Light.png'

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function WorkCard({ src1, src2, title, description, linktext, href }){
    const { theme } = useContext(ThemeContext);
    return(
        <>
        <div className="grid grid-flow-col bg-[#F6F6F6] dark:bg-[#181818] border-[#EBEBEB] dark:border-[#383737] rounded-[32px] mb-[32px] ">
            <div className="left py-[32px] px-[24px] lg:py-[60px] lg:pl-[60px] flex flex-col">
                <img className='max-w-[70px] mb-[16px] ' src={src1} alt="Project Logo" />
                <h3 className='text-[20px] lg:text-[32px] text-[#181818] dark:text-white font-extrabold mb-[16px] '>{title}</h3>
                <p className='text-[15px] lg:text-[16px] text-[#808080] font-normal mb-[16px] '>{description}</p>
                <a className='text-[18px] text-[#181818] dark:text-white font-medium flex items-center gap-[11px] lg:mt-auto' href={href} target='_blank' >{linktext} <img className='w-[18px] h-[12px]' src={theme === "dark" ? rightwhitearrow : rightblackarrow} alt="rightwhitearrow"/></a>
            </div>
            <div className="right hidden lg:flex items-center">
                <img className='max-w-[457px]' src={src2} alt="Project Image" />
            </div>
        </div>
        </>
    );
}