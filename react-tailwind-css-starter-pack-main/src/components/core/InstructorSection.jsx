import React from "react";
import InstructorImage from "../../assets/Images/Instructor.png";
import HighlightText from "./HomePage/HighlightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "./HomePage/Button";
const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row gap-20 items-center">
        <div className="w-[50%]">
          <img src={InstructorImage} alt="" className="shadow-white" />
        </div>
        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">
            Become an
            <HighlightText text={"Instructor"} />
          </div>
          <p className="text-[16px] font-medium text-richblack-300 w-[80%]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <CTAButton active={true} linkto={"./signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
