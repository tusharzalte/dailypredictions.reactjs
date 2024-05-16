import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Aniket Panchal",
    designation: "Backend Developer",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715859285/LoadCast/aniketdp_zthz7n.jpg",
  },
  {
    id: 2,
    name: "Bhavesh Upadhyay",
    designation: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715861774/LoadCast/hello2dp_fsprbs.jpg",
  },
  {
    id: 3,
    name: "Tushar Zalte",
    designation: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715860695/LoadCast/tushardp_qyflkr.jpg",
  },
  {
    id: 4,
    name: "Ajinkya Bhagat",
    designation: "Backend Developer",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715860696/LoadCast/ajinkyadp_mvw6ob.jpg",
  },
  {
    id: 5,
    name: "Vaibhav Wadsamudrakar",
    designation: "Documentation Specialist",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715859361/LoadCast/vaibhavdp_dyaisk.jpg",
  },
  {
    id: 6,
    name: "Chinmay Kate",
    designation: "Documentation Specialist",
    image:
      "https://res.cloudinary.com/dmlhtqirp/image/upload/v1715860970/LoadCast/chinmaydp_ct4fee.jpg",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
