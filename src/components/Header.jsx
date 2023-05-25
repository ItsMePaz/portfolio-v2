import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <div class="flex bg-black-400 p-5 space-x-9 justify-between shadow-lg">
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
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            ABOUT
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            SKILLS
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black"></span>
          </a>
        </li>
        <li>
          <a class="hover:text-amber-600 transition-shadow hover:cursor-pointer group duration-300">
            PROJECTS & EXPERIENCES
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
        href="https://drive.google.com/file/d/179bWH96XMtv2L_dw6EvOtJPY6lytvkHp/view?usp=sharing"
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
