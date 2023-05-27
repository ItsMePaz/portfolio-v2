import React from "react";

function Hero() {
  return (
    <div className="flex justify-center border-2 min-h-screen items-center font-mono font-semibold text-6xl">
      <h1>
        My name is&ensp;
        <span className="border-2 border-solid p-3 shadow-md bg-slate-100">
          Michael Andrew Paz
        </span>
        <br />
        <br />
        <br />
        <span className="flex justify-center">
          - Welcome to my Web Portfolio -
        </span>
      </h1>
    </div>
  );
}

export default Hero;
