import React, { useEffect } from "react";
import { Close } from "../../icons/Close";
import "./style.css";
export const Modal = ({ children, open, setOpen }) => {
  useEffect(() => {
    const root = document.getElementById("root");

    if (root) {
      if (open) {
        root.style.overflow = "hidden";
      } else {
        root.style.overflow = "auto";
      }

      root.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.id === "modal-background") {
          setOpen(false);
        }
      });
    }
  }, []);
  return open ? (
    <div id="modal-background" className="modal-background">
      <div id="modal" className="modal">
        <button className="modal-close" onClick={() => setOpen(false)}>
          <Close />
        </button>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};
