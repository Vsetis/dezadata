import React from "react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import links from "../data/links.json";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 text-white/80 border-b border-white/20 px-4">
      <nav className="flex container mx-auto  justify-between items-center py-4">
        <Link to="/" className="w-8 h-8 transition-all hover:text-white">
          <Logo />
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.target}
              className="hover:underline font-semibold text-sm transition-all hover:text-white"
              to={link.target}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
