import React from "react";
import "../../css/card.css";
export default function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="left-side">
        <i className={icon + " card-icon"}></i>
        <p className="card-title">{title}</p>
      </div>
      <div className="right-side">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
