import React from "react";
import Header from "./Header";
import Nav from "./Nav";

export default function Main(props) {
  return (
    <>
      <Header {...props} />
      <Nav {...props} />
      <main className="grid-in-main p-4 bg-gray-200">
        <div className="bg-white px-4 py-5 shadow-lg rounded">
          {props.children}
        </div>
      </main>
    </>
  );
}
