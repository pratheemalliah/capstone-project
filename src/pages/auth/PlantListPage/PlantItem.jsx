import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import * as util from "shared-components/util";

const PlantItem = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(() =>
    util.getRandomElement(plant.images)
  );
  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img
          src={plant.images[imageIdx].src}
          alt=""
          className="w-[280px] h-[320px] rounded-md"
        />
      </Link>
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-full w-5 h-5 mx-[3px] border border-slate-300",
                util.POT_COLORS[image.pot_color],
                imageIdx === index && "outline outline-slate-400 offset-2"
              )}
              onMouseEnter={() => setImageIdx(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
