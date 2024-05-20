import React, { useEffect } from "react";
import "../../css/modal.css";

export default function Modal({ title, images, description, open, setOpen }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <div className={open ? "modal-container open" : "modal-container closed"}>
      <div className="modal">
        <div className="close-container">
          <div className="close" onClick={() => setOpen(false)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>
        <div className="title-container">
          <div className="title">{title}</div>
        </div>
        <div className="description-container"></div>
      </div>
    </div>
  );
}
