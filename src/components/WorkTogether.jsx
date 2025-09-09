import Send from '../assets/img/Send.svg'

export default function WorkTogether() {
  return (
    <div className="work-together pb-[114px] ">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="left">
          <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] text-center font-bold mb-[8px] ">Let’s work together</h2>
          <p className="text-[#808080] text-[15px] lg:text-[20px] text-center mb-[34px] lg:mb-0 font-normal">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <div className="right lg:justify-self-end">
          <a className="text-white text-[18px] text-center font-medium bg-[#131313] dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex gap-[8px] px-[32px] py-[18px] rounded-[9px] justify-center lg:max-w-[202px] " href="#">
            <img src={Send} alt="" />
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
