export default function Banner({ title, para }){
    return(
        <>
        <div className="banner border-b border-b-[rgba(255,255,255,0.1)] pb-[66px] mb-[60px]">
            <h1 className="text-[48px] leading-[100%] mb-[8px] lg:text-[80px] text-[#181818] dark:text-white font-bold ">{title}</h1>
            <p className="text-[16px] lg:text-[24px] text-[#808080]  ">{para}</p>
        </div>
        </>
    );
}