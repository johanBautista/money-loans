"use client";

import { routeLinks } from "@/utils/routes";
import Link from "next/link";
import React, { useState } from "react";

const ThemeProvider = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const openMenu = () => {
    console.log("menu", isNavExpanded);

    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div className={isNavExpanded ? "" : ""}>
        <Link href="/">🤑</Link>
      </div>

      <button onClick={openMenu} className={isNavExpanded ? "" : "h-6 w-6 cursor-pointer md:hidden block"}>
        🍀
      </button>
      <div className={isNavExpanded ? "w-full text-center" : "hidden w-full md:flex md:items-center md:w-auto"}>
        <ul
          className={
            isNavExpanded
              ? "w-full divide-y divide-blue-700"
              : "text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0"
          }
        >
          {routeLinks.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} className={isNavExpanded ? "w-full " : "md:p-4 py-2 block hover:text-purple-400"}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={isNavExpanded ? "hidden" : ""}>user@user</p>
      </div>
    </nav>
  );
};

export default ThemeProvider;
