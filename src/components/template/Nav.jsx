import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <aside className="grid-in-nav bg-gray-800 shadow-md">
      <nav className="flex justify-center items-center h-full md:h-fit w-full md:flex-col">
        <Link
          className="group flex md:block justify-center items-center border-b border-gray-700/50 text-white text-lg h-full w-full hover:bg-emerald-500 duration-300 md:p-4"
          to="/"
        >
          <i className="group-hover:text-white bx bx-home mr-2 text-emerald-500"></i>
          Início
        </Link>
        <Link
          className="group flex md:block justify-center items-center border-b border-gray-700/50 text-white text-lg h-full w-full hover:bg-emerald-500 duration-300 md:p-4"
          to="/users"
        >
          <i className="group-hover:text-white bx bx-user mr-2 text-emerald-500"></i>
          Usuários
        </Link>
      </nav>
    </aside>
  );
}
