import React, { useState } from "react";
import clsx from "clsx";
import * as util from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = ({ plant, setImageIndex, imageIndex }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="my-10">
        <div className="text-emerald-700 flex">
          <i className="text-2xl fa-solid fa-brush mr-2"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">
          {plant.images.map((image, index) => (
            <div
              key={image.pot_color}
              className="flex flex-col items-center mx-2"
              onMouseEnter={() => setImageIndex(index)}
            >
              <div
                className={clsx(
                  "rounded-full w-10 h-10",
                  util.POT_COLORS[image.pot_color],
                  imageIndex === index &&
                    "outline outline-slate-400 outline-offset-2"
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIndex === index ? "text-slate-900" : "text-slate-500"
                )}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="rounded-full flex items-center text-xl text-slate-500 border-2 border-slate-300 px-3 py-4">
          <button
            className=""
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button className="" onClick={() => setQuantity((prev) => prev + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          onClick={async () => {
            setIsLoading(true);
            const res = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIndex].pot_color,
            });

            setIsLoading(false);
          }}
          className="flex-1 ml-4 rounded-full bg-emerald-700 text-xl text-white flex justify-center items-center hover:bg-emerald-800"
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner animate-spin mr-4 text-2xl"></i>
          ) : (
            <i className="fa-solid fa-cart-plus mr-4 text-2xl"></i>
          )}
          add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
