import aboutMemoji from '../assets//img/About Memoji.png'
import Desknotes from '../assets//img/Desknotes.png'
import Bookshelf from '../assets//img/Bookshelf.png'
import TechStack from '../assets//img/Tech Stack.png'

function KnowCards({ title, description, src }){
    return(
        <div className="each-card bg-[#F6F6F6] dark:bg-[#151515] border border-[#EBEBEB] dark:border-none rounded-[32px] text-center">
            <h3 className='text-[24px] lg:text-[32px] text-[#181818] dark:text-white font-extrabold mb-[8px] lg:mb-[16px] pt-[32px] lg:pt-[60px] '>{title}</h3>
            <p className='text-[15px] lg:text-[16px] text-[#808080] font-normal mb-[68px] '>{description}</p>
            <img className="max-w-[225px] mx-auto mb-[38px]" src={src} alt="" />
        </div>
    )
}

export default function Knowme() {
  return (
    <div className="know-me mb-[114px]">
      <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-[32px] ">Get to know me</h2>
      <div className="grid lg:grid-cols-2 gap-[16px]">
        <KnowCards src={aboutMemoji} title="About me" description="Who I am and what I do"></KnowCards>
        <KnowCards src={Desknotes} title="Notebook" description="My thoughts, insights, and reflections"></KnowCards>
        <KnowCards src={Bookshelf} title="Bookshelf" description="Books and pieces of wisdom I’ve enjoyed reading"></KnowCards>
        <KnowCards src={TechStack} title="Tech Stack" description="The dev tools, apps, devices, and games I use and play."></KnowCards>
      </div>
    </div>
  );
}

