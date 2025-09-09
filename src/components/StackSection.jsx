function StackCards({ stackLogo, stackName, stackType }) {
  return (
    <>
      <div className="stack-cards flex gap-[17px] lg:block p-[24px] bg-[#F3F3F3] dark:bg-[#181818] border border-[#EBEBEB] dark:border-[#383737] rounded-[22px] ">
        <img
          className="max-w-[60px] lg:max-w-[114px] lg:pt-[69px] lg:pb-[40px] lg:mx-auto"
          src={stackLogo}
          alt=""
        />
        <p className="text-[#181818] dark:text-white text-[16px] lg:text-[20px] font-semibold flex justify-between items-center w-full">
          {stackName}
          <span className="text-[#808080] bg-[rgba(255,255,255,0.7)] dark:bg-transparent text-[11px] lg:text-[14px] font-normal py-[6px] px-[12px] border border-[rgba(255,255,255,0.7)] dark:border-[#272525] rounded-[26px]  ">{stackType}</span>
        </p>
      </div>
    </>
  );
}

export default function StackSection({ title, stacks }) {
  return (
    <section className="stack-section mb-[80px]">
      <h2 className="text-[32px] lg:text-[48px] text-[#C5C5C5] dark:text-[#808080] font-bold mb-[32px] ">
        {title}
      </h2>
      <div className="cards-cont grid grid-cols-1 lg:grid-cols-3 gap-[16px]  ">
        {stacks.map((stack, index) => {
          return <StackCards key={index} stackLogo={stack.stackLogo} stackName={stack.stackName} stackType={stack.stackType} />
        })}
      </div>
    </section>
  );
}
