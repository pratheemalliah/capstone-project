import { useContext, useEffect, useState, useCallback } from "react";
import SessionContext from "context/SessionContext";
import * as CartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";
import clsx from "clsx";
import { motion } from "framer-motion";

const CartModal = ({ open }) => {
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await CartService.getCart();
    const data = await response.json();
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQty = 0;
  let subTotal = 0;

  for (let item of items) {
    totalQty += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col bg-white h-screen w-full max-w-xl"
    >
      <button
        className="absolute top=0 right-0 p-2"
        onClick={() => open(false)}
      >
        <i className="fa-regular fa-circle-xmark text-emerald-400 text-4xl"></i>
      </button>

      <div className="bg-emerald-800 text-white font-playfair text-3xl text-center py-7 shadow-md">
        {username}'s Cart
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 overflow-y-scroll pb-20">
            {items &&
              items.map((item, index) => (
                <div
                  key={item.id}
                  className={clsx(
                    "mx-5 pt-8 mt-8",
                    index > 0 && "border-t border-slate-200"
                  )}
                >
                  <CartItem item={item} fetchCart={fetchCart} />
                </div>
              ))}
          </div>
          <div className="flex flex-col px-4 border-t border-slate-200 m-8 pb-4">
            <div className="flex justify-between py-4 text-slate-400">
              <div>{totalQty} items</div>
              <div>
                subtotal
                <span className=" ml-2 text-lg text-slate-500">
                  ${subTotal}
                </span>
              </div>
            </div>
            <button
              className="rounded-full bg-emerald-700 flex justify-center py-2 text-lg text-white"
              onClick={() => alert("This app is for testing React skill")}
            >
              <i className="fa-regular fa-arrow-right-to-line ml-2 text-xl mr-2"></i>{" "}
              checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CartModal;
