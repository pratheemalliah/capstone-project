import React from "react";

const Field = ({ label, type, onChange, value }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className=" pl-1text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="px-2 py-1 focus:outline-emerald-600 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 w-64"
      />
    </div>
  );
};

export default Field;
