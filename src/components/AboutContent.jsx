import { Children } from "react";
import SignatureLight from '../assets/img/Light Mode Images/Signature-Light.png'
import SignatureDark from '../assets/img/Dark Mode Images/Signature-Dark.png'
import memoji from '../assets/img/memoji.png'
import Send from '../assets/img/Send.svg'
import india from '../assets/img/india.png'

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

import { Link } from "react-router-dom";

function Content({ title, children }){
  return(
    <>
      <h2 className="text-[16px] text-[#181818] dark:text-[#808080] font-semibold uppercase mb-[8px] ">{title}</h2>
              <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mb-[32px] ">{children}
              </p>
    </>
  );
}

export default function AboutContent() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-content pb-[91px]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="left order-2 lg:order-none col-span-7">
              <Content title="Who I am" >I’m <span className="text-[#808080] dark:text-white">Uthira Muthu</span> (Pronounced “U-thi-ra Mu-thu”) a multi-disciplinary front-end developer based in Chennai, Tamil Nadu, India <img className="w-[18px] inline" src={india} alt="India" />.</Content>
              <Content title="What I Do" >With two years of invaluable experience in my role at Unique Force Technology Solutions –– a tech company based here in Chennai, I have honed my skills in React.js, TailwindCSS, jQuery, HTML, CSS, Bootstrap and Sass, allowing me to craft seamless and interactive user experiences. During my time at Unique Force Technology Solutions, I had the privilege of collaborating on projects for esteemed clients such as the Bausch Health, Bausch & Lomb, Salix Pharmaceuticals and Ortho Dermatologics. It was an incredibly rewarding experience to develop applications that directly impact the lives of people.</Content>
              <Content title="What I Did" >Before delving into the realm of front end development, I spent four years pursuing my Engineering Degree at Panimalar Engineering College, Chennai. This background has equipped me with a keen eye for problem solving.</Content>
              <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mt-[28px] mb-[60px] ">
                Feel free to reach out via <a className="text-[#181818] dark:text-white underline" href="mailto:uthiramuthusp29@gmail.com">e-mail</a>, or follow me
                on <a className="text-[#181818] dark:text-white underline" href="https://www.instagram.com/_._.blood_pearl._._/">Instagram</a>. Want to see where I’ve worked? Check
                out my <a className="text-[#181818] dark:text-white underline" href="/files/UthiraMuthuResume.pdf">Resume</a>, or Connect with me on
                <a className="text-[#181818] dark:text-white underline" href="https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197"> LinkedIn</a>.
              </p>
              <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mb-[15px] ">Let’s build something great,</p>
              <img className="max-w-[326px]" src={theme === "dark" ? SignatureDark : SignatureLight} alt="Signature" />
              <div className="get-in-touch block lg:hidden">
                <Link className="text-[18px] text-white font-medium w-full dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex justify-center items-center gap-[8px] lg:max-w-[201px] py-[19px] mt-[100px] rounded-[9px] bg-[#181818]  " to="/contact">
                  <img src={Send} alt="Send" />
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="right mb-[65px] col-span-5">
              <img className="mx-auto max-w-[200px] lg:max-w-[345px]" src={memoji} alt="Memoji" />
              <div className="get-in-touch hidden lg:block">
                <Link className="text-[18px] text-white font-medium mx-auto dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex justify-center items-center gap-[8px] max-w-[201px] py-[19px] mt-[100px] rounded-[9px] bg-[#181818]  " to="/contact">
                  <img src={Send} alt="Send" />
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
