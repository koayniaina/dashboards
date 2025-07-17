import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Bottons() {
  return (
    <div className="bg-blue-800 text-white p-1.5 px-2 rounded-md cursor-pointer flex gap-1 items-center">
      <FaPlus /> Create
    </div>
  );
}
