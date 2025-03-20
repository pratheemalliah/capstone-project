import React, { useContext } from "react";
import SessionContext from "context/SessionContext";
import { motion } from "framer-motion";

const MobileMenuModal = ({ onCartOpenClick }) => {
  const { username, signOut } = useContext(SessionContext);
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1 }}
      className="bg-emerald-800 text-emerald-200 flex flex-col pt-12 pr-12 text-lg items-start pb-6 rounded-bl-lg shadow-md"
    >
      <div className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user"></i> {username}
      </div>
      <button className="px-8 py-4" onClick={signOut}>
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
        sign out
      </button>
      <button className="px-8 py-4" onClick={onCartOpenClick}>
        <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i> cart
      </button>
    </motion.div>
  );
};

export default MobileMenuModal;
