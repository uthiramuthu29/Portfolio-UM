import LogoDark from "../assets/img/Dark Mode Images/Logo-Dark.png";
import LogoLight from "../assets/img/Light Mode Images/Logo-Light.png";
import SelavuLogoDark from "../assets/img/Selavu Logo Dark.png";
import SelavuLogoLight from "../assets/img/Selavu Logo Light.png";
import TNLogo from "../assets/img/tn_logo.png";
import SubbiBig from "../assets/img/Subbi-Project-Big.png";
import SelavuProject from "../assets/img/Selavu Project.png";
import StoryBookDocsBig from "../assets/img/Storybook Docs.png";

import WorkCard from "./WorkCard";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function SelectedWork() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="selected-work ">
        <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-[32px] ">
          Selected Work
        </h2>
        <WorkCard
          src1={theme === "dark" ? LogoDark : LogoLight}
          title="This Portfolio"
          description="A responsive and modern portfolio website designed to showcase my skills, projects, and professional journey as a web developer. Built with clean UI/UX principles, the site highlights my technical expertise, past work, and contact details in an accessible and engaging way. The project demonstrates proficiency in frontend development, attention to design detail, and the ability to create a personal brand presence on the web."
          linktext="Visit Site"
          href="/"
          src2={SubbiBig}
        ></WorkCard>
        <WorkCard
          src1={theme === "dark" ? SelavuLogoDark : SelavuLogoLight}
          title="Selavu – Personal Finance Management Application"
          description="Selavu is a personal finance management web application built to demonstrate my skills in full-stack web development. The application enables users to track expenses, manage budgets, and gain insights into their financial habits. Currently released as a working prototype, Selavu is under active development with frequent updates and feature enhancements as part of continuous improvement. This project highlights my expertise in building scalable, user-focused applications from the ground up."
          linktext="Visit Site"
          href="https://selavu.netlify.app/"
          src2={SelavuProject}
        ></WorkCard>
        <WorkCard
          src1={TNLogo}
          title="TNEA College Finder Web Application"
          description="The TNEA College Finder is a web application developed to assist students in the Tamil Nadu Engineering Admissions (TNEA) counseling process. It allows users to filter colleges based on community, district, and cutoff marks, providing an intuitive way to explore and shortlist eligible institutions. Built with React, the project demonstrates my ability to design interactive user interfaces, manage state effectively, and create real-world solutions that simplify decision-making for students."
          linktext="Visit Site"
          href="https://tneacollegefinderapp-by-uthiramuthu.netlify.app/"
          src2={StoryBookDocsBig}
        ></WorkCard>
      </div>
    </>
  );
}
