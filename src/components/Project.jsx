import React from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const { title } = useParams();

  console.log(title);

  return (
    <div>
      <div>{title}</div>
    </div>
  );
}
