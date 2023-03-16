import React from "react";

export default function Footer() {
  return (
    <footer className="grid-in-footer">
      <div className="bg-white flex justify-center items-center h-full">
        <p className="text-base text-gray-600">
          Powered by{" "}
          <a
            className="text-black font-bold hover:text-emerald-500 duration-300"
            href="http://github.com/erxck"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erick Rian
          </a>
        </p>
      </div>
    </footer>
  );
}
