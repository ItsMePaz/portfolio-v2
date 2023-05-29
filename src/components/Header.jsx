import React from "react";
import logo from "./logo.png";

function Header({ resume }) {
  return (
    <div class="lg:fixed lg:top-0 lg:flex lg:bg-black-400 lg:p-5 lg:space-x-9 lg:justify-between shadow-lg bg-white w-screen z-10">
      <div class="">
        <img src={logo} alt="LOGO" class="w-44 bg-fixed" />
      </div>
      <ul class="flex items-center gap-14 font-mono font-semibold text-lg">
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            HOME
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300"
          >
            SKILLS
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            ABOUT
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            PROJECTS
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            CONTACTS
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
      </ul>
      <a //RESUME LINK
        href={resume}
        target="_blank"
      >
        <div class="bg-black h-9 text-white p-6 flex flex-col justify-center items-center focus:outline-none focus:ring focus:ring-violet-300 font-mono font-semibold text-lg hover:text-amber-600 transition-shadow hover:cursor-pointer">
          RESUME
        </div>
      </a>
    </div>
  );
}

export default Header;
