"use client";
import React, { useState, useEffect } from "react";
import { Navbardata } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const path = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path); // Update active path on navigation
  }, [path]);

  return (
    <div className="hidden lg:flex justify-center items-center">
      {Navbardata.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`px-4 text-sm py-2 whitespace-nowrap ${
            active === item.href ? "text-blue-500 font-bold" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
