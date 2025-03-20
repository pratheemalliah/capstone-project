import React, { useContext, useState } from "react";
import SessionContext from "context/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="bg-emerald-800 flex justify-center"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="w-full max-w-5xl px-8 py-2 flex items-center justify-between">
          <Link to="/plants">
            <div className="flex flex-col items-center text-2xl text-white font-playfair">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                alt="nav-bar-logo"
              />
              Rica&apos;s Plants
            </div>
          </Link>
          <div className="flex justify-end flex-1 hidden sm:flex">
            <div className="relative min-w-32">
              <button
                className="text-emerald-200 flex items-center"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="mr-2 text-md fa-solid fa-user"></i> {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-10 left-0 mt-20 bg-white bottom-[-46px] rounded-md shadow-md">
                  <button
                    className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                    onClick={signOut}
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="mr-2 text-md fa-solid fa-cart-shopping"></i> cart
            </button>
          </div>
          <button
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="text-4xl fa-solid fa-bars text-emerald-400"></i>
          </button>
        </div>
      </nav>
      {cartOpen && (
        <ModalWrapper isOpen={cartOpen} onCloseclick={() => setCartOpen(false)}>
          <CartModal open={setCartOpen} />
        </ModalWrapper>
      )}

      {mobileMenuOpen && (
        <ModalWrapper
          isOpen={mobileMenuOpen}
          onCloseclick={() => setMobileMenuOpen(false)}
        >
          <MobileMenuModal
            open={setMobileMenuOpen}
            onCartOpenClick={() => {
              setCartOpen(true);
              setMobileMenuOpen(false);
            }}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default NavBar;
