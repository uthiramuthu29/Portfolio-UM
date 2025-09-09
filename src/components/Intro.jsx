import Memoji from "../assets/img/My-Memoji.png";
import HandWave from "../assets/img/waving-hand.png"

export default function Intro() {
  return (
    <>
      <div className="intro mb-[137px] lg:mb-[220px]">
        <div className="grid lg:grid-flow-col">
          <div className="left order-2 lg:order-none">
            <h1 className="text-[48px] lg:text-[80px] text-[#181818] dark:text-white font-extrabold  ">
              <span className="text-[#808080] lg:hidden block">Hi <img className="w-[48px] mb-[15px] inline" src={HandWave} alt="" /></span>
              <span className="text-[#808080]">I’m</span> Uthira Muthu
            </h1>
            <p className="text-[15px] leading-[20px] lg:text-[24px] lg:leading-[36px] font-medium text-[#808080] mb-[40px]">
              A frontend Developer specializing in building responsive,
              high-performance web applications with modern technologies.
            </p>
            <div className="flex flex-col lg:flex-row gap-[16px] ">
              <a
                className="text-[#181818] dark:text-[#808080] text-[18px] text-center font-medium bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white py-[19px] px-[32px] rounded-[9px]"
                href="#"
                download
              >
                See my resume
              </a>
              <a
                className="text-[#181818] dark:text-[#808080] text-[18px] text-center font-medium bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white py-[19px] px-[32px] rounded-[9px]"
                href="#"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="right mb-[50px] lg:mb-0">
            <img className="circle-img max-w-[250px] mx-auto" src={Memoji} alt="Memoji" />
          </div>
        </div>
      </div>
    </>
  );
}
