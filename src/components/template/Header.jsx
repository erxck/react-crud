import React from "react";

export default function Header(props) {
  return (
    <header className="hidden sm:flex sm:flex-col sm:justify-center sm:gap-2 grid-in-header bg-white px-4 shadow-lg">
      <h1 className="text-4xl font-bold">
        <i className={`bx bx-${props.icon} mr-2 text-emerald-500`}></i>
        {props.title}
      </h1>
      <p className="text-xl text-gray-500">{props.subtitle}</p>
    </header>
  );
}
