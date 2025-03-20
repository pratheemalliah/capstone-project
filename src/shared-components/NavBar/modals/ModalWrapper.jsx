import React, { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = ({ children, isOpen, onCloseclick }) => {
  if (!isOpen) {
    return null;
  }

  const backgroundDivRef = useRef();
  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseclick();
          }
        }}
        className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm font-lato flex justify-end items-start z-20"
      >
        <button className="absolute top=0 right-0 p-2" onClick={onCloseclick}>
          <i className="fa-regular fa-circle-xmark text-emerald-400 text-4xl"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
