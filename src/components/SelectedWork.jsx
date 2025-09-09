import Subbi from '../assets/img/Subbi.png'
import ReactDocs from '../assets/img/Logos/React.png'
import StoryBookDocs from '../assets/img/Storybook Docs-Icon.png'
import SubbiBig from '../assets/img/Subbi-Project-Big.png'
import ReactDocsBig from '../assets/img/React Docs.png'
import StoryBookDocsBig from '../assets/img/Storybook Docs.png'

import WorkCard from './WorkCard'




export default function SelectedWork() {
  return (
    <>
      <div className="selected-work ">
        <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-[32px] ">Selected Work</h2>
        <WorkCard src1={Subbi} title="Subbi –– The free subscriptions manager" description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more." linktext="Download App" href="#" src2={SubbiBig}></WorkCard>
        <WorkCard src1={ReactDocs} title="React Documentation" description="With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar." linktext="Visit Site" href="#" src2={ReactDocsBig}></WorkCard>
        <WorkCard src1={StoryBookDocs} title="Storybook Documentation" description="This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process." linktext="Visit Site" href="#" src2={StoryBookDocsBig} ></WorkCard>
      </div>
    </>
  );
}
