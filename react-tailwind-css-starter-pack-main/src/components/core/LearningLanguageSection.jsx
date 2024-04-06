import React from "react";
import HighlightText from "./HomePage/HighlightText";
import CTAButton from "./HomePage/Button";
import Know_your_progress from "../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../assets/Images/Compare_with_others.png";
import Plan_your_lesson from "../../assets/Images/Plan_your_lessons.png";
const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </div>

        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-5">
          <img
            src={Know_your_progress}
            alt="KNowYourProgressImage"
            className="object-contain -mr-32 "
          />
          <img
            src={Compare_with_others}
            alt="Compare_With_Others"
            className="object-contain"
          />
          <img
            src={Plan_your_lesson}
            alt="Plan_your_lesson"
            className="object-contain -ml-36"
          />
        </div>

        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
