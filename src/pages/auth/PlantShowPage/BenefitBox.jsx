import React from "react";
import clsx from "clsx";

const BenefitBox = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center px-2 py-4 flex-1">
      <i className={clsx("text-emerald-700 text-3xl", icon)}></i>
      <div className="text-slate-700 my-1">{title}</div>
      <div className="text-sm text-slate-500 text-center">{description}</div>
    </div>
  );
};

export default BenefitBox;
