import React from "react";

const PlantHeader = ({ plant }) => {
  return (
    <>
      <div className="flex justify-between items-center text-emerald-700">
        <div className="text-4xl font-polyfair">{plant.name}</div>
        <div className="text-3xl">${plant.price}</div>
      </div>
      <div className="pl-px my-2 text-lg italic text-slate-500">
        {plant.botanical_name}
      </div>
    </>
  );
};

export default PlantHeader;
