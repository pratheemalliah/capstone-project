import React, { useState } from "react";
import PlantHeader from "./PlantHeader";
import BenefitBox from "./BenefitBox";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import * as util from "shared-components/util";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PlantInfoSection = ({ plant }) => {
  const [imageIndex, setImageIndex] = useState(
    util.getRandomElement(plant.images)
  );
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block mb-8 md:hidden">
          <PlantHeader plant={plant} />
        </div>
        <Zoom>
          <img
            className="rounded-lg"
            src={plant.images[imageIndex].src}
            alt="plant"
          />
        </Zoom>
        <div className="flex mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon="fa-regular fa-truck-fast"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeader plant={plant} />
        </div>
        <p className="text-slate-600 leading-relaxed mt-6">
          {plant.description}
        </p>
        <PlantPurchaseOptions
          plant={plant}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      </div>
    </div>
  );
};

export default PlantInfoSection;
